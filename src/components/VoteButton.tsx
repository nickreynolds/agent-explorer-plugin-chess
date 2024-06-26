/* eslint-disable */
import { Avatar, Row, Col, Button, Drawer, Menu } from 'antd'
import React, { useState } from 'react'
import { useVeramo } from '@veramo-community/veramo-react'
import { ICredentialIssuer, IDIDManager, IDataStore, IDataStoreORM, IIdentifier, TAgent } from '@veramo/core'
import { useQueries } from 'react-query'
import { IIdentifierProfile } from '@veramo-community/agent-explorer-plugin'

import { SmileOutlined } from '@ant-design/icons'

interface VoteButtonProps {
  onAction: (did: string, option: string) => void
  option?: string
}

type IdentifierProfileWithAgent = 
  IIdentifierProfile & { 
    agent: TAgent<ICredentialIssuer & IDataStore & IDataStoreORM & IDIDManager> 
  }

type IdentifierWithAgent = IIdentifier & {
  agent: TAgent<ICredentialIssuer & IDataStore & IDataStoreORM & IDIDManager>
}

export const VoteButton: React.FC<VoteButtonProps> = ({ onAction, option }) => {
  const { agents } = useVeramo<ICredentialIssuer & IDataStore & IDataStoreORM & IDIDManager>()
//   const [selectedEmoji, setSelectedEmoji] = useState<string | undefined>(emoji)
  const [showDrawer, setShowDrawer] = useState(false)
  const [showPicker, setShowPicker] = useState(false)


  const agentQueries = useQueries(
    agents?.map(agent => {
      return {
        queryKey: ['identifiers', { agentId: agent?.context.id }],
        queryFn: () => agent.didManagerFind(),
      }
    }),
    
  )

  const identifiersWithAgents: IdentifierWithAgent[] = React.useMemo(() => {
    const identifiersWithAgents: IdentifierWithAgent[] = []
    if (agentQueries.every(
      result => result.isSuccess || result.isError
    )) {
      agentQueries.forEach((agentQuery, agentIndex) => {
        if (agentQuery.isSuccess && agentQuery.data) {
          agentQuery.data.forEach((identifier) => {
            identifiersWithAgents.push({
              ...identifier,
              agent: agents[agentIndex],
            })
          })
        }

      })

    }      
    return identifiersWithAgents
  }, [agentQueries])


  const profileQueries = useQueries(
    identifiersWithAgents.map(identifier => {
      return {
        queryKey: ['identifierProfile', { 
            did: identifier.did, 
            //@ts-ignore
            agentId: identifier.agent.context.id
        }],
        queryFn: () => identifier.agent.getIdentifierProfile({ did: identifier.did })
      }
    })
  )

  const profilesWithAgents: IdentifierProfileWithAgent[] = React.useMemo(() => {
    const profilesWithAgents: IdentifierProfileWithAgent[] = []
    if (profileQueries.every(
      result => result.isSuccess || result.isError
    )) {

      
      profileQueries.forEach((profileQuery, profileIndex) => {
        if (profileQuery.isSuccess && profileQuery.data) {
          profilesWithAgents.push({
            ...profileQuery.data,
            agent: identifiersWithAgents[profileIndex].agent,
          })
        }
        
      })
    }

    return profilesWithAgents
  }, [profileQueries])


  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  };

  return (
      <>
        {option && 
            <>
                <Button
                    style={{borderRadius: 20}}
                    size='small'
                    onClick={() => setShowDrawer(true)}
                    type='primary'
                    >{option}</Button>
                <Drawer
                    title={`Vote ${option}`} 
                    placement="bottom"
                    closable={true}
                    onClose={() => setShowDrawer(false)}
                    open={showDrawer}
                    height={500}
                >
                    <Row>
                    <Col md={6}/>
                    <Col  
                        md={12}
                        xs={24}
                        style={{position: 'relative'}}
                        >
                        <Menu
                        style={menuStyle}
                        items = {profilesWithAgents.map((profile) => {
                            return (
                            {
                                key: profile.did,
                                onClick: () => {
                                setShowDrawer(false)
                                if(option) {
                                    onAction(profile.did, option)
                                }
                                },
                                icon: <Avatar src={profile.picture} size={'small'}/>,
                                label: profile.name,
                            }
                            )
                        }
                        )}
                        />
                    </Col>
                    <Col md={6}/>
                    </Row>

                </Drawer>
            </>
        }
    </>
  )
}
