import Question from '../models/Question.js';
import Result from '../models/Result.js';

// GET 50 random questions based on rank
export const getQuestions = async (req, res) => {
  const { rank } = req.query;

  try {
    const all = await Question.find({ rank }).select('-correctAnswer');
    const shuffled = all.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 50);

    res.json({ success: true, questions: selected });
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).json({ success: false, message: "Server error loading questions" });
  }
};

// POST exam submission
export const submitExam = async (req, res) => {
  const { name, rank, answers } = req.body;

  try {
    const alreadyDone = await Result.findOne({ name, rank });
    if (alreadyDone) {
      return res.json({
        success: false,
        message: "Already submitted",
        result: alreadyDone
      });
    }
    
    

    // Get the exact questions user answered (or skipped)
    const questionIds = Object.keys(answers);
    const questions = await Question.find({ _id: { $in: questionIds } });

    // If user skipped some, include them as null
    const all = await Question.find({ rank });
    const shuffled = all.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 50);

    let score = 0;
    const review = selected.map(q => {
      const userAnswer = answers[q._id] || null;
      const isCorrect = userAnswer === q.correctAnswer;
      if (isCorrect) score++;

      return {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        userAnswer
      };
    });

    const percentage = Math.round((score / selected.length) * 100);

    const result = new Result({
      name,
      rank,
      score,
      percentage,
      totalQuestions: selected.length,
      answers: review
    });

    await result.save();

    res.json({ success: true, score, percentage, answers: review });
  } catch (err) {
    console.error("Error submitting exam:", err);
    res.status(500).json({ success: false, message: "Error submitting exam" });
  }
};


// GET all results for admin
export const getAllResults = async (req, res) => {
  const results = await Result.find().sort({ createdAt: -1 });
  res.json({ success: true, results });
};

// GET single result by ID
export const getResultById = async (req, res) => {
  const result = await Result.findById(req.params.id);
  if (!result) return res.status(404).json({ success: false });
  res.json({ success: true, result });
};

// POST check if already submitted
export const checkAlreadySubmitted = async (req, res) => {
  const { name, rank } = req.body;

  try {
    const result = await Result.findOne({ name, rank });
    if (result) return res.json({ submitted: true, result });
    res.json({ submitted: false });
  } catch (err) {
    res.status(500).json({ submitted: false, message: "Server error" });
  }
};

// Optional: DELETE result
export const deleteResult = async (req, res) => {
  try {
    const deleted = await Result.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Result not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting result" });
  }
};

