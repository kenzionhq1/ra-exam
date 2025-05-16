const Result = require('../models/Result');
const Question = require('../models/Question');

exports.getQuestions = async (req, res) => {
  const { rank } = req.query;

  try {
    const questions = await Question.find({ rank }).select('-correctAnswer');
    res.json({ success: true, questions });
  } catch {
    res.status(500).json({ success: false, message: 'Could not fetch questions' });
  }
};

exports.submitExam = async (req, res) => {
  const { name, rank, answers } = req.body;

  if (!name || !rank || !answers) {
    return res.status(400).json({ success: false, message: 'Missing data' });
  }

  const questionIds = Object.keys(answers);
  const questions = await Question.find({ _id: { $in: questionIds } });

  let score = 0;
  const review = questions.map(q => {
    const userAnswer = answers[q._id];
    const isCorrect = userAnswer === q.correctAnswer;
    if (isCorrect) score++;

    return {
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      userAnswer
    };
  });

  const percentage = Math.round((score / questions.length) * 100);

  const result = new Result({
    name,
    rank,
    score,
    percentage,
    totalQuestions: questions.length,
    answers: review
  });

  await result.save();

  res.json({ success: true, score, percentage, answers: review });
};

exports.getResults = async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 });
    res.json({ success: true, results });
  } catch {
    res.status(500).json({ success: false, message: 'Failed to load results' });
  }
};
