import Question from '../models/Question.js';
import Result from '../models/Result.js';

export const getQuestions = async (req, res) => {
  const { rank } = req.query;

  const all = await Question.find({ rank }).select('-correctAnswer');
  const shuffled = all.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 50); // Adjust size as needed

  res.json({ success: true, questions: selected });
};

export const submitExam = async (req, res) => {
  const { name, rank, answers } = req.body;

  const alreadyDone = await Result.findOne({ name, rank });
  if (alreadyDone) {
    return res.json({
      success: false,
      message: "Already submitted",
      result: alreadyDone
    });
  }

  const all = await Question.find({ rank });
  const selected = all.sort(() => 0.5 - Math.random()).slice(0, 50);

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
};

export const getAllResults = async (req, res) => {
  const results = await Result.find().sort({ createdAt: -1 });
  res.json({ success: true, results });
};

export const getResultById = async (req, res) => {
  const result = await Result.findById(req.params.id);
  if (!result) return res.status(404).json({ success: false });
  res.json({ success: true, result });
};



export const checkAlreadySubmitted = async (req, res) => {
  const { name, rank } = req.body;

  const result = await Result.findOne({ name, rank });
  if (result) {
    return res.json({ submitted: true, result });
  }

  res.json({ submitted: false });
};
