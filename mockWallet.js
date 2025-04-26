
export default async function mockWalletSignIn() {
  return {
    address: "0xMOCKADDRESS123456789",
    signTransaction: async (tx) => tx,
  };
}
