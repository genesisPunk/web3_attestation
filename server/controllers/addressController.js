
import algosdk from 'algosdk';


export const getAddress = async (req, res) => {
    try {
      const account = algosdk.generateAccount();
      res.json({ address: account.addr, mnemonic: algosdk.secretKeyToMnemonic(account.sk)});
      console.log(account.addr + "    "+  algosdk.secretKeyToMnemonic(account.sk));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
