import React from 'react'
import { Avatar, Typography, List, Space } from 'antd'
import { useQuery } from 'react-query'
import { UniqueVerifiableCredential } from '@veramo/core'
import { getStampsMetadata } from './api'
import { IdentifierProfile } from '@veramo-community/agent-explorer-plugin'


interface GitcoinStampProps {
  credential: UniqueVerifiableCredential
  context?: {
    hideHolder?: boolean
  }
}

export const GitcoinStamp: React.FC<GitcoinStampProps> = ({
  credential,
  context,
}) => {

  const { data: stampMetadata, isLoading: isLoadingMetadata } = useQuery(
    ['stamps-metadata'],
    () => getStampsMetadata(),
  )

  const stamp = React.useMemo(() => {
    if (!stampMetadata) return undefined
    //@ts-ignore
    if (stampMetadata.detail === 'Error fetching external stamp metadata') return undefined

    const provider = credential.verifiableCredential.credentialSubject.provider
    for (const p of stampMetadata) {
      for (const g of p.groups) {
        for (const s of g.stamps) {
          if (s.name === provider) {
            return {
              provider: {
                name: p.name,
                description: p.description,
                icon: p.icon,
              },
              group: g.name,
              name: s.name,
              description: s.description,
            }
          }
        }
      }
    }
    return undefined
  }, [stampMetadata, credential.verifiableCredential.credentialSubject.provider])

  return (
    <>
      {stamp && <Space direction='horizontal'>
        <img src={stamp.provider.icon} style={{width: 30, marginRight: 10}}/>
        <div>
          <Typography.Title level={5}>{stamp.provider.name}</Typography.Title>
          <Typography.Paragraph>{stamp.group} - {stamp.description}</Typography.Paragraph>        

        </div>
      </Space>}

      {!stamp && !isLoadingMetadata && <Typography.Title level={5}>{credential.verifiableCredential.credentialSubject.provider}</Typography.Title>}
      {!context?.hideHolder && <>
        <Typography.Title level={5}>Holder</Typography.Title>
        {!!credential.verifiableCredential.credentialSubject.id && <IdentifierProfile did={credential.verifiableCredential.credentialSubject.id} />}
      </>}
    </>
  )
}
