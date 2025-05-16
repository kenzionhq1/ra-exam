const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true },
  score: { type: Number, required: true },
  percentage: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  answers: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
      userAnswer: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Result', ResultSchema);
