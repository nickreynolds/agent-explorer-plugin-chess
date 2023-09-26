import React, { useState } from 'react'
import { formatRelative } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { IDataStoreORM } from '@veramo/core'
import { App, Button, Drawer, List } from 'antd'

import { GitcoinStamp } from './GitcoinStamp.js'
import { CloudDownloadOutlined } from '@ant-design/icons'
import { ImportStamps } from './ImportStamps.js'


export const Feed = () => {
  const { notification } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()
  const { agent } = useVeramo<IDataStoreORM>()
  
  const { data: credentials, isLoading, refetch } = useQuery(
    ['gitcoin-passport', { agentId: agent?.context.name }],
    () =>
      agent?.dataStoreORMGetVerifiableCredentials({
        where: [{ column: 'issuer', value: ['did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC'] }],
        order: [{ column: 'issuanceDate', direction: 'DESC' }],
      }),
  )


  return (
    <PageContainer
    extra={[
      <Button
        key={'add'}
        icon={<CloudDownloadOutlined />}
        type="primary"
        title="Import stamps"
        onClick={() => setDrawerOpen(true)}
      >Import</Button>,
    ]}
    >
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 30,
        }}
        dataSource={credentials}
        renderItem={(item) => (
          <GitcoinStamp
            key={item.hash}
            credential={item}
          />
        )}
      />

      <Drawer 
        title="Import stamps"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen} 
        width={800}
        destroyOnClose={true}
      >
        <ImportStamps />
      </Drawer>
    </PageContainer>
  )
}
