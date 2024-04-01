import React, { PropsWithChildren, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { Button, Col, Drawer, Row, Spin, theme } from 'antd'
import { IDIDManager, IDataStore, IDataStoreORM, IResolver, UniqueVerifiableCredential } from '@veramo/core'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { useEffect } from 'react'
import { Votes } from './Votes'


export const PollPage = () => {
  const { hash } = useParams<{ hash: string }>()
  const { agents, agent } = useVeramo<IDataStore & IDataStoreORM & IDIDManager & IResolver>()
  const [refDrawerOpen, setRefDrawerOpen] = useState(false);
  const [poll, setPoll] = useState<UniqueVerifiableCredential | null>(null)

  const { token } = theme.useToken()

  const [sidebar, setSidebar] = useState<UniqueVerifiableCredential | null>(null)
  const [loading, setLoading] = useState(true)
  
  const localAgent = React.useMemo(() => {
    return agents.find((agent) => agent.context.id === 'web3Agent')
  }, [agents])

  if (!agent) return null
  if (!localAgent) return null

  if (!hash) return null

  useEffect(() => {
    setLoading(true)
    const load = async () => {      
      try {
        const postCredential = await agent.dataStoreGetVerifiableCredential({ hash })
        setPoll({ hash, verifiableCredential: postCredential })        
      } catch (e) {
        console.log("unknown poll.")
      }

      setLoading(false)
    }
    load()
  }, [hash, agent])

  if (loading) return (<Spin />)
  if (!poll) return null

  return (
    <PageContainer 
      loading={loading}
      style={{paddingTop: 10}}
    >  
      <ResponsiveContainer>
        <Row gutter={16}>
          <Col xs={24} sm={16} style={{
            overflow: 'hidden',
            marginBottom: token.margin
          }}>
          {poll && <VerifiableCredentialComponent credential={poll} />}
          </Col>
        </Row>
        <Row>
          <Button type='text' onClick={() => setRefDrawerOpen(true)}>
            See votes
          </Button>
        </Row>
      </ResponsiveContainer>
      <Drawer 
        title="Posts that reference this one"
        placement="right"
        onClose={() => setRefDrawerOpen(false)}
        open={refDrawerOpen} 
        width={800}
        destroyOnClose={true}
      >
        <Votes hash={hash} />
      </Drawer>
    </PageContainer>
  )
}

const ResponsiveContainer: React.FC<PropsWithChildren> = ({
  children
}) => {
  return (<Row>
    <Col 
      lg={3}
    />
    <Col  
      lg={18}
      sm={24}
      xs={24}
      style={{position: 'relative'}}
      >
        {children} 
      </Col>
      <Col 
        lg={3}
      />
  </Row>)
}