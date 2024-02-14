import express from 'express';
import { issueText } from '../controllers/issueController';


const router = express.Router();


router.post('/', issueText)

export default router;
