import * as React from "react";
import { IDataStore, IDataStoreORM, UniqueVerifiableCredential } from "@veramo/core";
import { MarkDown } from "@veramo-community/agent-explorer-plugin";
import { Table, Tag, Typography, theme } from "antd";
import { useVeramo } from "@veramo-community/veramo-react";
import { useQuery } from "react-query";
import { createWitnessHash, getTimestamp } from "../api.js";

export const WitnessPoll: React.FC<{credential: UniqueVerifiableCredential, context?: any}> = ({ credential, context }) => {
    const { agent } = useVeramo<IDataStoreORM & IDataStore>()
    const { token } = theme.useToken()
    const [validVotes, setValidVotes] = React.useState<string[]>([])
    const { title, pollOptions } = credential.verifiableCredential.credentialSubject
    const credHash = credential.hash

  const { data: credentials, refetch } = useQuery(
    [
      'credentialReactionCredentials',
      {credHash,  agentId: agent?.context.name },
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
            value: [credHash],
          },
          {
            column: 'credentialType',
            value: ['VerifiableCredential,WitnessPollResponse'],
          },
        ],
      }),
  )
    //   console.log("credentials: ", credentials)
    React.useEffect(() => {
        async function getWitnessed() {
            if (credentials) {
                let validVotesTemp = []
                for (var cred of credentials) {
                    try {
                        const result = await getTimestamp(createWitnessHash(cred.hash))
                        if (result) {
                            console.log("found witnesed vote hash: ", cred.hash)
                            //setValidVotes(validVotes.set(cred.hash, true))
                            validVotesTemp.push(cred.hash)
                        } else {
                            console.log("not a witnessed vote. hash: ", cred.hash)
                        }
                    } catch (ex) {
                        console.log("not sure: ", ex)
                    }
                }
                setValidVotes(validVotesTemp)
            }
        }
        getWitnessed()
    },[credentials])
  const map = new Map<string,number>()
  const witnessedMap = new Map<string,number>()
  pollOptions.forEach((po: any) => {
    map.set(po, 0)
    witnessedMap.set(po, 0)
  })

  console.log("valid votes: ", validVotes)

  credentials?.forEach((vote) => {
    const option = vote.verifiableCredential.credentialSubject.option
    // TODO: check if vote valid
    map.set(option, (map.get(option) || 0) + 1)

    if (validVotes.includes(vote.hash)) {
        console.log("found a witnessed vote. hash: ", vote.hash)
        witnessedMap.set(option, (witnessedMap.get(option) || 0) + 1)
    }
  })

  let pollResults = [{}]
  map.forEach((count, option) => {
    pollResults = [...pollResults, { option, count, validCount: witnessedMap.get(option) }]
  })
  
  return <div style={{marginTop: token.margin}}>
    Title: {title}
    <Table dataSource={pollResults} columns={[{title: 'option', key: 'option', dataIndex: 'option'}, {title: 'all votes', key: 'count', dataIndex: 'count'}, {title: 'witnessed votes', key: 'validCount', dataIndex: 'validCount'}]} />
    </div>
}
