import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  rank: String,
  question: String,
  options: [String],
  correctAnswer: String
}, { timestamps: true });

export default mongoose.model('Question', questionSchema);
