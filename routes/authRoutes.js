const express = require('express');
const router = express.Router();
const { startExam } = require('../controllers/authController');

router.post('/start-exam', startExam);

module.exports = router;
