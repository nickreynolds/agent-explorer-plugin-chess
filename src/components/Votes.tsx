import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { IDataStoreORM } from '@veramo/core'
import { List } from 'antd'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'

interface VotesProps {
  hash: string
}

export const Votes: React.FC<VotesProps> = ({ hash }) => {
  const { agent } = useVeramo<IDataStoreORM>()

  const { data: credentials, isLoading, refetch } = useQuery(
    [
      'credentialReactionCredentials',
      {hash,  agentId: agent?.context.name },
    ],
    () =>
      agent?.dataStoreORMGetVerifiableCredentialsByClaims({
        where: [
          {
            column: 'type',
            value: ['pollHash'],
          },
          {
            column: 'value',
            value: [hash],
          },
          {
            column: 'credentialType',
            value: ['VerifiableCredential,WitnessPollResponse'],
          },
        ],
      }),
  )

  return (
    <List
        itemLayout="vertical"
        size="large"
        dataSource={credentials}
        renderItem={(item) => (
        <div style={{marginTop: '20px'}}>
        <VerifiableCredentialComponent credential={item} />
        </div>
        )}
    />
  )
}
