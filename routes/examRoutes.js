import express from 'express';
import {
  getQuestions,
  submitExam,
  getAllResults,
  getResultById
} from '../controllers/examController.js';

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit-exam', submitExam);
router.get('/results', getAllResults);
router.get('/result/:id', getResultById);

export default router;
