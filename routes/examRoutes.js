const express = require('express');
const router = express.Router();
const { getQuestions, submitExam, getResults } = require('../controllers/examController');

router.get('/questions', getQuestions);
router.post('/submit-exam', submitExam);
router.get('/results', getResults);

module.exports = router;
