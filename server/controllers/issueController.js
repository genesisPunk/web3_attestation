import crypto from 'crypto'
import algosdk from 'algosdk'
import {algodClient} from '../algorand.js'


export const issueText = (req, res) => {
    
    //retrieving algorand address, text for hash and seed phrase of algorand address 
     const { address, seedPhrase, text} = req.query;
    // calculating hash
    const textHash = calculateSHA256Hash(text);
    console.log(address + "  " + seedPhrase + "  " + text + "  " + textHash);
    
    var txn = sendTransactionWithNote(address, seedPhrase, textHash);

    txn.then((txId)=>{
      res.send(txId)
    }, (err)=>{
        console.log(err)
    })

    
}

  

// Function to calculate SHA-256 hash
function calculateSHA256Hash(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
  }


async function sendTransactionWithNote(senderAddress, senderMnemonic, note) {
  const senderAccount = algosdk.mnemonicToSecretKey(senderMnemonic);
  
  const recipientAddress = "BXMKQ2F2VLYCC47HHHWW7SSSFMQXP425QAWTW2KANVBVCDB45T33C2PAJA";

  // Convert the note string to Uint8Array
  const noteBuffer = new TextEncoder().encode(note);

  // Get suggested transaction parameters
  const params = await algodClient.getTransactionParams().do();


  // Build a payment transaction with a note
  const txn = algosdk.makePaymentTxnWithSuggestedParams(
    senderAddress,
    recipientAddress,
    0, // Amount in microAlgos
    undefined,
    noteBuffer,
    params
  );


  // Sign the transaction
  const signedTxn = algosdk.signTransaction(txn, senderAccount.sk);

  // Submit the transaction
  const txId = await algodClient.sendRawTransaction(signedTxn.blob).do();
  console.log('Transaction ID:', txId);

  return txId;
}
