// https://www.scorer.gitcoin.co/#/dashboard/api-keys
export const API_KEY = 'E3mUPLMY.B7uhtg4a0B1MFtVCTx28lrCezopZET4A'

export const getStampsMetadata = async (): Promise<any> => {
  const url = `https://api.scorer.gitcoin.co/registry/stamp-metadata`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY
    }
  });

  return response.json();
};