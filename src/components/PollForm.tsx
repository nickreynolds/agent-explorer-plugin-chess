import { Input, Checkbox, Space, Tabs, theme, Tag, Form, Button, Table } from 'antd'
import React, { useState, useEffect } from 'react'
import { useVeramo } from '@veramo-community/veramo-react'
import { ICredentialIssuer, IDIDManager, IDataStore, IDataStoreORM, ProofFormat, TAgent } from '@veramo/core'
import { ActionButton } from '@veramo-community/agent-explorer-plugin'
import { createWitnessHash, postLeaf } from '../api.js'

interface CreatePollProps {
  onOk: (witnessHash: string) => void
  initialIssuer?: string
}

export const PollForm: React.FC<CreatePollProps> = ({ onOk, initialIssuer }) => {
  const token = theme.useToken()

  const [title, setTitle] = useState<string>('')
  const [pollInput, setPollInput] = useState<string>('')
  const [pollOptions, setPollOptions] = useState<DataSource[]>([])

  const { agent } = useVeramo<ICredentialIssuer & IDataStore & IDataStoreORM & IDIDManager>()
  const [isSaving, setIsSaving] = useState<boolean>(false)


  const [form] = Form.useForm()

  interface DataSource {
    option: string
  }

  const handleCreatePost = async (did: string, issuerAgent: TAgent<ICredentialIssuer>) => {
    setIsSaving(true)
    try {

      const identifier = await issuerAgent?.didManagerGet({ did })
      const usableProofs = await issuerAgent.listUsableProofFormats(identifier)
      const proofFormat = usableProofs.includes('jwt') ? 'jwt' : usableProofs[0]

      const credential = await issuerAgent.createVerifiableCredential({
        save: true,
        proofFormat: (proofFormat as ProofFormat),
        credential: {
          '@context': ['https://www.w3.org/2018/credentials/v1'],
          type: ['VerifiableCredential', 'WitnessPollAnnouncement'],
          issuer: { id: did },
          issuanceDate: new Date().toISOString(),
          credentialSubject: {
            title,
            pollOptions: pollOptions.map(({option}) => option)
          },
        },
      })
      console.log("credential: ", credential)
      if (credential) {
        const credhash = await agent?.dataStoreSaveVerifiableCredential({verifiableCredential: credential})
        const witnessHash = createWitnessHash(credhash!)
        await postLeaf(witnessHash)
        
        // also send to appropriate DID via DIDComm if desired, but always store locally as well

        if (credhash) {
          window.localStorage.removeItem('witness-poll')
          onOk(credhash)
        }

      }
    } catch (e) {
      console.error(e)
    }
    setIsSaving(false)
  }

  console.log("pollOptions: ", pollOptions)
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
        <Form form={form}>
            <Input defaultValue="Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            <Space.Compact style={{ width: '100%' }}>

                <Input defaultValue="Add poll option" 
                    value={pollInput}
                    onChange={(e) => setPollInput(e.target.value)}
                />
                <Button type="primary" onClick={() => {
                    setPollOptions([...pollOptions, { option: pollInput }])
                    setPollInput('')
                }}>Add Poll Option</Button>
            </Space.Compact>
        </Form>
        <Table dataSource={pollOptions} columns={[{title: 'option', key: 'option', dataIndex: 'option'}]} />
                
        <Space direction='horizontal'>

        <ActionButton 
          title='Create Poll and Save to Agent:' 
          disabled={pollOptions.length === 0 || isSaving} 
          onAction={handleCreatePost}
          />

      </Space>
    </Space>
  )
}
