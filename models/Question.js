const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  rank: { type: String, required: true },
  question: { type: String, required: true },
  options: [String],
  correctAnswer: { type: String, required: true }
});

module.exports = mongoose.model('Question', QuestionSchema);
