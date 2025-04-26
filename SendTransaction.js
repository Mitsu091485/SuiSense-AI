
import React, { useState } from 'react';

const SendTransaction = () => {
  const [txData, setTxData] = useState('');
  const [result, setResult] = useState(null);

  const sendTx = async () => {
    const res = await fetch('/api/sendTransaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transactionData: txData })
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <h2>Send Transaction</h2>
      <textarea value={txData} onChange={(e) => setTxData(e.target.value)} />
      <button onClick={sendTx}>Send</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default SendTransaction;
