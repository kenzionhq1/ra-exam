import express from 'express';
import { startExam } from '../controllers/authController.js';
const router = express.Router();

router.post('/start-exam', startExam);

export default router;
