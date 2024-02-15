import express from 'express';
import {getAddress} from '../controllers/addressController.js';


const router = express.Router();

router.get('/address', getAddress)

export default router;