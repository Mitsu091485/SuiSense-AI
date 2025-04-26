
import suiClient from './suiClient.js';

export default async function getNFTMetadata(tokenId) {
  try {
    const response = await suiClient.getObject({ id: tokenId, options: { showContent: true } });
    return response.data;
  } catch (err) {
    console.error("Error fetching NFT metadata:", err);
    return null;
  }
}
