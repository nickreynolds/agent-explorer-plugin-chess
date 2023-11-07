/* eslint-disable */

import React, { useMemo } from 'react';
import { IIdentifierHoverComponentProps } from "@veramo-community/agent-explorer-plugin";
import { IDataStoreORM, UniqueVerifiableCredential } from '@veramo/core-types';
import { useVeramo } from '@veramo-community/veramo-react';
import { useQueries, useQuery } from 'react-query';
import { Spin, Typography } from 'antd';
import { getEthereumAddress, computeEntryHash } from '@veramo/utils'
import { Icon } from './Icon';
import { getAddressStamps } from './api';

export const IdentifierHoverComponent: React.FC<IIdentifierHoverComponentProps> = ({did}) => {
  const { agent } = useVeramo<IDataStoreORM>()

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
    <Typography.Text>
      <Icon small/> stamps: {isLoading ? <Spin /> : stamps.length}
    </Typography.Text>
  )
}


