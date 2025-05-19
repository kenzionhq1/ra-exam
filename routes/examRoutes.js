import {
  getQuestions,
  submitExam,
  getAllResults,
  getResultById,
  checkAlreadySubmitted
} from '../controllers/examController.js';

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit-exam', submitExam);
router.get('/results', getAllResults);
router.get('/result/:id', getResultById);

// NEW:
router.post('/check-submitted', checkAlreadySubmitted);

export default router;
