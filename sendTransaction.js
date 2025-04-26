
import suiClient from './suiClient.js';

export default async function sendTransaction(senderAddress, txData) {
  try {
    const result = await suiClient.executeTransactionBlock({
      transactionBlock: txData,
      signer: {
        getAddress: async () => senderAddress,
        signTransactionBlock: async () => txData,
      },
    });
    return result;
  } catch (err) {
    console.error("Error sending transaction:", err);
    return null;
  }
}
