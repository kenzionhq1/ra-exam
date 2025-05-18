import Question from '../models/Question.js';
import Result from '../models/Result.js';

export const getQuestions = async (req, res) => {
  const { rank } = req.query;

  const all = await Question.find({ rank }).select('-correctAnswer');

  // Shuffle questions randomly
  const shuffled = all.sort(() => 0.5 - Math.random());

  // Pick first 100
  const selected = shuffled.slice(0, 100);

  res.json({ success: true, questions: selected });
};



export const submitExam = async (req, res) => {
  const { name, rank, answers } = req.body;
  const questionIds = Object.keys(answers);
  const questions = await Question.find({ _id: { $in: questionIds } });

  let score = 0;
  const review = questions.map(q => {
    const isCorrect = answers[q._id] === q.correctAnswer;
    if (isCorrect) score++;
    return {
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      userAnswer: answers[q._id]
    };
  });

  const percentage = Math.round((score / questions.length) * 50);
  const result = new Result({ name, rank, score, percentage, totalQuestions: questions.length, answers: review });
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
