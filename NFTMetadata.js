
import React, { useState } from 'react';

const NFTMetadata = () => {
  const [tokenId, setTokenId] = useState('');
  const [metadata, setMetadata] = useState(null);

  const fetchMetadata = async () => {
    const res = await fetch(`/api/getNFTMetadata?tokenId=${tokenId}`);
    const data = await res.json();
    setMetadata(data);
  };

  return (
    <div>
      <h2>Fetch NFT Metadata</h2>
      <input value={tokenId} onChange={(e) => setTokenId(e.target.value)} placeholder="Enter Token ID" />
      <button onClick={fetchMetadata}>Fetch</button>
      <pre>{JSON.stringify(metadata, null, 2)}</pre>
    </div>
  );
};

export default NFTMetadata;
