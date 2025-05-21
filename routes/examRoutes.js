import express from 'express';

import {
  getQuestions,
  submitExam,
  getAllResults,
  getResultById,
  checkAlreadySubmitted,
  deleteResult
} from '../controllers/examController.js';

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit-exam', submitExam);
router.get('/results', getAllResults);
router.get('/result/:id', getResultById);
router.post('/check-submitted', checkAlreadySubmitted);
router.delete('/delete-result/:id', deleteResult);

export default router;
