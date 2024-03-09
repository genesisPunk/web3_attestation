// algorand.js

import algosdk from 'algosdk';

const algodServer = 'https://testnet-api.algonode.cloud/';
const apiKey = ''; // Replace with your Algorand API key. We are using free APIs from https://nodely.io/


const token = '';
const server = 'https://testnet-api.algonode.cloud';
const port = 443;

export const algodClient = new algosdk.Algodv2(token, server, port);


async function checkConnectionStatus() {
  try {
    const status = await algodClient.status().do();
    console.log('Algorand Node Status:', status);
    console.log('Connected to Algorand Node');
  } catch (error) {
    console.error('Error checking connection status:', error);
    console.log('Not connected to Algorand Node');
  }
}

checkConnectionStatus();

