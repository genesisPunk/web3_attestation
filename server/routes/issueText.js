import express from 'express';
import { issueText } from '../controllers/issueController.js';

const router = express.Router();

router.post('/issue', issueText)

export default router;
