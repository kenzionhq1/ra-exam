import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
  name: String,
  rank: String,
  score: Number,
  percentage: Number,
  totalQuestions: Number,
  answers: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
      userAnswer: String
    }
  ]
}, { timestamps: true });

export default mongoose.model('Result', ResultSchema);
