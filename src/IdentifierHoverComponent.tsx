/* eslint-disable */

import React from 'react';
import { IIdentifierHoverComponentProps } from "@veramo-community/agent-explorer-plugin";
import { IDataStoreORM } from '@veramo/core-types';
import { useVeramo } from '@veramo-community/veramo-react';
import { useQuery } from 'react-query';
import { Spin, Typography } from 'antd';
import { API_KEY } from './apikey';
import { Icon } from './Icon';

const getScore = async (address: string, apiKey: string): Promise<any> => {
  // 5912 is the id of the gitcoin passport scorer I created
  const url = `https://api.scorer.gitcoin.co/registry/score/5912/${address}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey
    }
  });

  return response.json();
};

export const IdentifierHoverComponent: React.FC<IIdentifierHoverComponentProps> = ({did}) => {
  const { agent } = useVeramo<IDataStoreORM>()

  // FIXME: this is a hack to get the address from the did
  const address = did.split(':').pop()
  
  const { data: score, isLoading } = useQuery(
    [
      'identifierScore',
      did,
      { agentId: agent?.context.name },
    ],
    () => address ? getScore(address, API_KEY) : undefined,
  )

console.log('score', score)
  const str = score?.detail ? score.detail : 'no score'
  return (
    <Typography.Text>
      <Icon /> score: {isLoading ? <Spin /> : str}
    </Typography.Text>
  )
}


