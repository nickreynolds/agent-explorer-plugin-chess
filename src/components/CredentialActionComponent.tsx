/* eslint-disable */
import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { IDataStore, IDataStoreORM } from '@veramo/core'
import { App, Button, Divider, theme, Typography } from 'antd'
import { VoteButton } from './VoteButton.js'
import { v4 } from 'uuid'
import { createWitnessHash, postLeaf } from '../api.js'
import { useNavigate, useLocation } from 'react-router-dom'
// import { ReactionButton } from './ReactionButton'
interface Props {
  hash: string
}

export const CredentialActionComponent: React.FC<Props> = ({
  hash,
}) => {
  const { agent } = useVeramo<IDataStoreORM & IDataStore>()
  const { notification } = App.useApp()
  const navigate = useNavigate()
  const location = useLocation()

  const { data: credentials, refetch } = useQuery(
        [
        'credential',
        {hash,  agentId: agent?.context.name },
        ],
        () =>
        agent?.dataStoreORMGetVerifiableCredentials({
            where: [
            {
                column: 'hash',
                value: [hash],
            },
            {
                column: 'type',
                value: ['VerifiableCredential,WitnessPollAnnouncement'],
            },
            ],
        }),
    )
    const credential = credentials && credentials[0]
    // console.log("credential: ", credential)

    const vote = async (did: string, option: string) => {
        const verifiableCredential = await agent?.createVerifiableCredential({
        credential: {
            '@context': ['https://www.w3.org/2018/credentials/v1'],
            type: ['VerifiableCredential', 'WitnessPollResponse'],
            issuer: did,
            issuanceDate: new Date().toISOString(),
            credentialSubject: {
            pollHash: hash,
            option,
            },
        },
        proofFormat: 'jwt',
        })

    // console.log("vote: ", verifiableCredential)

    const credentialHash = await agent?.dataStoreSaveVerifiableCredential({
      verifiableCredential
    })

    await postLeaf(createWitnessHash(credentialHash!))

    const messageId = v4()
    const threadId = credential?.hash
    console.log("response thread id: ", threadId)

    //@ts-ignore
    const recipient = credential?.verifiableCredential.issuer.id
    console.log("recipient: ", recipient)
    const shareMessage = {        
        type: 'https://didcomm.org/basicmessage/2.0/message',
        from: did,
        created_time: new Date().getTime(),
        to: recipient,
        id: messageId,
        thid: threadId,
        body: { content: "I voted in your poll" },
        attachments: [{
            media_type: 'credential+ld+json',
            data: { json: verifiableCredential }
        }]
    }
    const packedMessage = await agent?.packDIDCommMessage({ 
        message: shareMessage, 
        packing: 'authcrypt' 
      })

      const res = await agent?.sendDIDCommMessage({ 
        packedMessage: packedMessage!, 
        messageId: shareMessage.id, 
        recipientDidUrl: recipient! 
      })

      await agent?.dataStoreSaveMessage({ message: {
        type: 'https://didcomm.org/basicmessage/2.0/message',
        from: did,
        to: recipient,
        id: messageId,
        threadId: threadId,
        data: { content: shareMessage.body.content },
        attachments: shareMessage.attachments
      } })

      notification.success({
        message: 'Message sent'
      })
    // queryClient.invalidateQueries([
    //   'credentialReactionCredentials',
    //   {hash,  agentId: agent?.context.name },
    // ])

  }

  if (!credential || !(credential.verifiableCredential.credentialSubject.pollOptions)) {
    return <></>
  } 

  const showGoToDetails = !(location.pathname.includes('/witness/poll/'))

  return (
    <>
        {credential && credential.verifiableCredential.credentialSubject.pollOptions?.map((option: string) => {
            return <VoteButton option={option} onAction={vote}/>
        })}
        {showGoToDetails && 
          <>
            <Divider type="vertical"/>
            <Button onClick={() => navigate(`/witness/poll/${hash}`)}>
              Go to Poll Details Page
            </Button>
          </>
        }
    </>
  
  )
}
