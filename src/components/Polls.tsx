import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { IDataStoreORM } from '@veramo/core'
import { PlusOutlined } from '@ant-design/icons'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { App, Button, Drawer, List } from 'antd'
import { PollForm } from './PollForm.js'

export const Polls = () => {
  const { notification } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pageSize, setPageSize] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const navigate = useNavigate()
  const { agent } = useVeramo<IDataStoreORM>()


  const { data: credentialsCount } = useQuery(
    ['credentialsCount', { agentId: agent?.context.name }],
    () =>
      agent?.dataStoreORMGetVerifiableCredentialsCount({
        where: [{ column: 'type', value: ['VerifiableCredential,WitnessPollAnnouncement'] }],
      }),
  )

  const { data: credentials, isLoading, refetch } = useQuery(
    ['witness-polls', { agentId: agent?.context.name }],
    () =>
      agent?.dataStoreORMGetVerifiableCredentials({
        where: [{ column: 'type', value: ['VerifiableCredential,WitnessPollAnnouncement'] }],
        order: [{ column: 'issuanceDate', direction: 'DESC' }],
      }),
  )

  const handleNewPost = async (hash: string) => {
    console.log("handle new post.")
    notification.success({
      message: 'Poll created'
    })
    setDrawerOpen(false)
    await refetch()
    navigate(`/witness/poll/${hash}`)
  }


  return (
    <PageContainer
    extra={[
      <Button
        key={'add'}
        icon={<PlusOutlined />}
        type="primary"
        title="Compose new post"
        onClick={() => setDrawerOpen(true)}
      >Compose</Button>,
    ]}
    >

      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          position: 'both',
          pageSize: pageSize,
          current: page,
          total: credentialsCount,
          showSizeChanger: true,
          onChange(page, pageSize) {
            setPage(page)
            setPageSize(pageSize)
          },
        }}
        dataSource={credentials}
        renderItem={(item) => (
          <div style={{marginTop: '20px'}}>
          <VerifiableCredentialComponent credential={item} />
          </div>
        )}
      />

      <Drawer 
        title="Compose new post"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen} 
        width={800}
        destroyOnClose={true}
      >
        <PollForm onOk={handleNewPost}/>
      </Drawer>
    </PageContainer>
  )
}
