import { VerifiableCredential } from "@veramo/core-types";

// https://www.scorer.gitcoin.co/#/dashboard/api-keys
export const API_KEY = 'E3mUPLMY.B7uhtg4a0B1MFtVCTx28lrCezopZET4A'

type StampMetadataGroup = {
  name: string,
  stamps: Array<{
    description: string,
    hash: string,
    name: string,
  }>
}

type StampMetadata = {
  id: string,
  name: string,
  description: string,
  icon: string,
  connectMessage: string,
  groups: Array<StampMetadataGroup>
}


export const getStampsMetadata = async (): Promise<Array<StampMetadata>> => {
  const url = `https://api.scorer.gitcoin.co/registry/stamp-metadata`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY
    }
  });

  return response.json();
};

export const getAddressStamps = async (address: string): Promise<Array<{version: string, credential: VerifiableCredential}>> => {
  const url = `https://api.scorer.gitcoin.co/registry/stamps/${address}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY
    }
  });

  return (await response.json()).items;
};
