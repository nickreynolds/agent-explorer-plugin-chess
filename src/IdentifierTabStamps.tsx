import { useVeramo } from '@veramo-community/veramo-react'
import { IResolver, UniqueVerifiableCredential } from '@veramo/core-types'
import { getEthereumAddress, computeEntryHash } from '@veramo/utils'
import React, { useMemo } from 'react'
import { useQueries, useQuery } from 'react-query'
import { getAddressStamps } from './api'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { List } from 'antd'

export const IdentifierTabStamps: React.FC<{ did: string }> = ({
  did,
}) => {

  const { agent } = useVeramo<IResolver>()

  const { data: resolutionResult, isLoading } = useQuery(
    ['identifier', did],
    () => agent?.resolveDid({ didUrl: did }),
  )

  const addresses: string[] = useMemo(() => {
    const addresses: string[] = []
    if (resolutionResult?.didDocument?.verificationMethod) {
      for (const vm of resolutionResult.didDocument.verificationMethod) {
        const address = getEthereumAddress(vm)
        if (address) {
          addresses.push(address)
        }
      }
    }
    return addresses
  }, [resolutionResult])

  const stampQueries = useQueries(
    addresses.map(address => {
      return {
        queryKey: ['gitcoin-stamps', address],
        queryFn: () => getAddressStamps(address),
      }
    })
  )

  const stamps: UniqueVerifiableCredential[] = React.useMemo(() => {
    const stamps: UniqueVerifiableCredential[] = []
    for (const stampQuery of stampQueries) {
      if (stampQuery.isSuccess && stampQuery.data) {
        stampQuery.data.forEach(({credential}) => {
          stamps.push({
            hash: computeEntryHash(credential),
            verifiableCredential: credential
          })
        })
      }
    }
    return stamps
  }, [stampQueries])

  return (
    <List
      grid={{       
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 4,
        column: 2,
      }}
      dataSource={stamps}
      renderItem={(item) => (
        <div style={{ margin: 10 }}>
        <VerifiableCredentialComponent credential={item} context={{ hideHolder: true }} />
      </div>
      )}
    />
  )
}


