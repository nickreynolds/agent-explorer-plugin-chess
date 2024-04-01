import React from 'react'
import { Avatar, Typography, List, Space } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import { useQuery } from 'react-query'
import { UniqueVerifiableCredential } from '@veramo/core'
import { getTimestamp } from '../api'
import { IdentifierProfile, VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { WitnessClient } from '@witnessco/client'


interface WitnessedCredentialHeaderProps {
  credential: UniqueVerifiableCredential
}

export const WitnessedCredentialHeader: React.FC<WitnessedCredentialHeaderProps> = ({
  credential,
}) => {
  const witness = new WitnessClient()
  // console.log("witnessing: ", witness.hash(credential.hash))
  const { data: witnessData, isLoading: isLoadingWitnessData } = useQuery(
    ['witness-data', credential.hash],
    () => {
      return getTimestamp(witness.hash(credential.hash))
    }
  )

  if (!witnessData) {
    console.log("credential not yet witnessed")
  }
  const date = React.useMemo(() => {
    if (!witnessData) return undefined
    //@ts-ignore
    // if (stampMetadata.detail === 'Error fetching external stamp metadata') return undefined

    // console.log("witness data: ", witnessData)

    return witnessData
  }, [witnessData])

  return (
    <>
      {date && <Space direction='horizontal' align='baseline' >
        <CheckOutlined />
        <div>
          <Typography.Text>{`Witnessed: ${date.toDateString()}`}</Typography.Text>        
        </div>
      </Space>}
    </>
  )
}
