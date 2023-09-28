import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { IDIDManager, IDataStore, IDataStoreORM } from '@veramo/core'
import { App, Button } from 'antd'
import { API_KEY } from './apikey'


const getAddressStamps = async (address: string, apiKey: string): Promise<any> => {
  const url = `https://api.scorer.gitcoin.co/registry/stamps/${address}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey
    }
  });

  return response.json();
};


export const ImportStamps = () => {
  const { notification } = App.useApp()
  const { agent } = useVeramo<IDataStoreORM & IDIDManager & IDataStore>()
  const [ accounts, setAccounts ] = useState<string[]>([])
  const { data: contacts } = useQuery(
    ['contacts', { agentId: agent?.context.name }],
    () =>
      agent?.dataStoreORMGetIdentifiers({}),
  )

  const { data: identifiers, } = useQuery(
    ['identifiers', { agentId: agent?.context.name }],
    () =>
      agent?.didManagerFind(),
  )

  useEffect(() => {
    const getAccounts = async () => {
      const result: string[] = []
      if (identifiers) {
        for (const identifier of identifiers) {
          const didDoc = await agent?.resolveDid({ didUrl: identifier.did });
          if (didDoc?.didDocument?.verificationMethod[0].blockchainAccountId) {
            const account = didDoc.didDocument.verificationMethod[0].blockchainAccountId.split(':').pop();
            if (account) {
              result.push(account)
            }
          }
        }
      }
      if (contacts) {
        for (const contact of contacts) {
          const didDoc = await agent?.resolveDid({ didUrl: contact.did });
          if (didDoc?.didDocument?.verificationMethod[0].blockchainAccountId) {
            const account = didDoc.didDocument.verificationMethod[0].blockchainAccountId.split(':').pop();
            if (account) {
              result.push(account)
            }
          }
        }
      }
      setAccounts([...new Set(result)])
    }
    getAccounts();
  }, [identifiers, contacts])

  const handleImport = async () => {
    if (accounts.length > 0) {

      for (const account of accounts) {
        const response = await getAddressStamps(account, API_KEY);
        if (response.items?.length > 0) {
          console.log('Saving stamps for ' + account + 'with ' + response.items.length + ' stamps')
          for (const item of response.items) {
            await agent?.dataStoreSaveVerifiableCredential({
              verifiableCredential: item.credential,
            })
            console.log('Saved stamp ')
          }
        }
      }
    }
  }


  return (
    <>
      <Button 
        onClick={handleImport}
      >
        Import stamps for {accounts.length} contacts
      </Button>
    </>
  )
}
