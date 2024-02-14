import crypto from 'crypto'
const algosdk = require('algosdk');
const algodClient = require('../algorand.js');



export const issueText = (req, res) => {
    
    //retrieving algorand address, text for hash and seed phrase of algorand address 
    const { address, seedPhrase, text} = req.body;
    //calculating hash
    const textHash = calculateSHA256Hash(text);

    res.send(sendTransactionWithNote(address, seedPhrase, textHash))
}

  

// Function to calculate SHA-256 hash
function calculateSHA256Hash(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
  }


async function sendTransactionWithNote(senderAddress, senderMnemonic, note) {
  const senderAccount = algosdk.mnemonicToSecretKey(senderMnemonic);

  // Get suggested transaction parameters
  const params = await algodClient.getTransactionParams().do();

  // Build a payment transaction with a note
  const txn = algosdk.makePaymentTxnWithSuggestedParams(
    senderAddress,
    recipientAddress,
    0, // Amount in microAlgos
    undefined,
    note,
    params
  );

  // Sign the transaction
  const signedTxn = algosdk.signTransaction(txn, senderAccount.sk);

  // Submit the transaction
  const txId = await algodClient.sendRawTransaction(signedTxn.blob).do();
  console.log('Transaction ID:', txId);

  return txId;
}
