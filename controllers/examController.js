import Question from '../models/Question.js';
import Result from '../models/Result.js';

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

  // Get all questions for rank and select 50
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
