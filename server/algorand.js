// algorand.js

const algosdk = require('algosdk');

const algodServer = 'https://testnet-algorand.api.purestake.io/ps1';
const apiKey = 'YOUR_ALGOD_API_KEY'; // Replace with your Algorand API key

export const algodClient = new algosdk.Algodv2({
  'X-API-Key': apiKey,
  baseServer: algodServer,
});


