import express from 'express';
import { verifyText } from '../controllers/verifyController.js';

const router = express.Router();

router.post('/verify', verifyText)

export default router;