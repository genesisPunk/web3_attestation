import express from 'express';
import algosdk from 'algosdk';
import {getAddress} from '../controllers/addressController';


const router = express.Router();

router.get('/address', getAddress)

export default router;