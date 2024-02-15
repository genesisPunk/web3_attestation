import crypto from 'crypto'
import algosdk from 'algosdk';
import axios from 'axios';
import {algodClient} from '../algorand.js';
import { log } from 'console';


// Replace this with the transaction ID you want to fetch information for
var issuingAddress;
var result;

export const verifyText = (req, res) => {
    
    //retrieving txn id, text for verification 
    const {txnId, text} = req.query;
    //calculating hash
    const textHash = calculateSHA256Hash(text);
    console.log(txnId + "  " + text + "  ");

    const link = "https://testnet-idx.algonode.cloud/v2/transactions?txid="+txnId;


    fetchTxnInfo(link, textHash)
    .then((result)=>{
        res.send(result)
    },(err)=>{
      console.log(".then error:   "  +err)
    })
    
}


// Function to calculate SHA-256 hash
function calculateSHA256Hash(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
  }



async function fetchTxnInfo(url, providedHash){

    try{
        const response = await axios.get(url);
        // fetching note field from response and converting the base 64 to string  
        const fetchedHash = Buffer.from(response.data.transactions[0].note, 'base64').toString('utf-8');
        console.log("fetchedHash: " + fetchedHash + "\n" + "providedHash: " + providedHash);
        if (fetchedHash === providedHash) {
          console.log('Hashes are identical.');
          return "same";
        } else {
          console.log('Hashes are different.');
          return "different";
        }
    }catch(error){
        console.log(error)
    }
    

}  
