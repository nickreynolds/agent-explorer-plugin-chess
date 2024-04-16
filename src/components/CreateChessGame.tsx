import { Input, Checkbox, Space, Tabs, theme, Tag, Form, Button, Table, App, SelectProps, Modal, Col, Row, AutoComplete, Flex } from 'antd'
import React, { useState, useEffect } from 'react'
import { useVeramo } from '@veramo-community/veramo-react'
import { ICredentialIssuer, IDIDManager, IDataStore, IDataStoreORM, IIdentifier, ProofFormat, TAgent } from '@veramo/core'
import { ActionButton } from '@veramo-community/agent-explorer-plugin'
import { createWitnessHash, postLeaf } from '../api.js'
import { IDIDDiscovery } from '@veramo/did-discovery'
import { QrScanner } from '@yudiel/react-qr-scanner'
import parse from 'url-parse'
import { shortId } from '@veramo-community/agent-explorer-plugin'
import { decodeBase64url } from '@veramo/utils'
import { QrcodeOutlined } from '@ant-design/icons'
import { v4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { CHESS_INVITE_MESSAGE_TYPE } from '../constants.js'

interface CreatePollProps {
  onOk: (witnessHash: string) => void
  initialIssuer?: string
}

export const CreateChessGame: React.FC<CreatePollProps> = ({ onOk, initialIssuer }) => {
  const { notification } = App.useApp()
  const token = theme.useToken()
  const navigate = useNavigate()

  // const [opponent, setOpponent] = useState<IIdentifier>()

  const { agent } = useVeramo<ICredentialIssuer & IDataStore & IDataStoreORM & IDIDManager & IDIDDiscovery>()
  const [isSaving, setIsSaving] = useState<boolean>(false)


  const [form] = Form.useForm()

  interface DataSource {
    option: string
  }

  const [options, setOptions] = useState<SelectProps<object>['options']>([])
  const [opponent, setOpponent] = useState<string>('')
  const [showQrCodeScanner, setShowQrCodeScanner] = useState<boolean>(false)

  const searchResult = async (query: string) => {
    const response = await agent?.discoverDid({ query })
    const dids = response?.results.map((r) => r.matches.map((m) => m.did)).flat() ?? []
    console.log("dids: ", dids)

    const selectOptions: Array<{ value: string; label: any }> = []
    new Set(dids).forEach((did) => {
      selectOptions.push({
        value: did,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>{shortId(did)}</span>
          </div>
        ),
      })
    })
    return selectOptions
  }

  const handleSearch = async (value: string) => {
    setOptions(value ? await searchResult(value) : [])
  }

  const handleQrCodeResult = async (result: string) => {
    const parsed = parse(result, true)
    if ((parsed?.query as any)?._oob) {
      const decoded = decodeBase64url((parsed?.query as any)?._oob)
      try {
        const message = JSON.parse(decoded)
        if (
          message.from &&
          message.type === 'https://didcomm.org/out-of-band/2.0/invitation'
        ) {
          setOpponent(message.from)
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      setOpponent('')
    }
  }


  const handleCreatePost = async (issuerDID: string, issuerAgent: TAgent<ICredentialIssuer>) => {
    setIsSaving(true)
    try {
      const identifier = await issuerAgent?.didManagerGet({ did: issuerDID })
      const usableProofs = await issuerAgent?.listUsableProofFormats(identifier)
      const proofFormat = usableProofs?.includes('jwt') ? 'jwt' : usableProofs![0]

      const credential = await agent?.createVerifiableCredential({
        save: true,
        proofFormat: (proofFormat as ProofFormat),
        credential: {
          '@context': ['https://www.w3.org/2018/credentials/v1'],
          type: ['VerifiableCredential', 'ChessGameInvite'],
          issuer: { id: issuerDID },
          issuanceDate: new Date().toISOString(),
          credentialSubject: {
            white: issuerDID,
            black: opponent
          },
        },
      })
      console.log("credential: ", credential)
      if (credential) {
        const credhash = await agent?.dataStoreSaveVerifiableCredential({verifiableCredential: credential})
        console.log("credhash: ", credhash)
        // const witnessHash = createWitnessHash(credhash!)
        // await postLeaf(witnessHash)
        const shareMessage = {
          type: CHESS_INVITE_MESSAGE_TYPE,
          from: issuerDID,
          created_time: new Date().getTime(),
          to: opponent,
          id: v4(),
          thid: credhash,
          body: { content: 'Lets play chess!' },
          attachments: [{
            media_type: 'credential+ld+json',
            data: { json: credential }
          }]
        }
        const packedMessage = await issuerAgent.packDIDCommMessage({ 
          message: shareMessage, 
          packing: 'authcrypt' 
        })
  
        const res = await issuerAgent.sendDIDCommMessage({ 
          packedMessage: packedMessage!, 
          messageId: shareMessage.id, 
          recipientDidUrl: opponent! 
        })
  
        await issuerAgent.dataStoreSaveMessage({ message: {
          type: shareMessage.type,
          from: issuerDID,
          to: opponent,
          id: shareMessage.id,
          threadId: shareMessage.thid,
          data: { content: shareMessage.body.content },
          attachments: shareMessage.attachments
        } })
  
        notification.success({
          message: 'Message sent'
        })
  
        navigate(`/chess/games/${credhash}`)
      }
    } catch (e) {
      console.error(e)
    }
    setIsSaving(false)
  }

  return (
    <Col>
       {!showQrCodeScanner && (
        <Row>
          <AutoComplete
            popupMatchSelectWidth={true}
            options={options}
            onSelect={(e) => setOpponent(e)}
            onSearch={handleSearch}
            style={{ flex: 1 }}
          >
            <Input
              value={opponent}
              placeholder='Enter a DID'
              onChange={(e) => setOpponent(e.target.value)}
              style={{
                flex: 1,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            />
          </AutoComplete>
          <Button onClick={() => setShowQrCodeScanner(true)} size='large'>
            <QrcodeOutlined />
          </Button>
        </Row>
      )}

      {showQrCodeScanner && (
        <Col>
          <QrScanner
            onDecode={(result) => {
              setShowQrCodeScanner(false)
              setTimeout(() => {
                handleQrCodeResult(result)
              }, 125)
            }}
            onError={(error) => {
              notification.error({ message: error.message })
            }}
          />
        </Col>
      )}

      <ActionButton 
        title='Create Game and Send to Opponent:' 
        disabled={!opponent || isSaving} 
        onAction={handleCreatePost}
      />

    </Col>
  )
}
