
const algosdk = require('algosdk');


export const getAddress = async (req, res) => {
    try {
      const account = algosdk.generateAccount();
      res.json({ address: account.addr, mnemonic: account.mnemonic });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }











