import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  rank: { type: String, required: true },
  question: { type: String, required: true },
  options: [String],
  correctAnswer: { type: String, required: true }
});
QuestionSchema.pre('save', async function (next) {
  const Person = mongoose.model('Person'); // Assuming you have a Person model
  const person = await Person.findOne({ rank: this.rank });
  if (!person) {
    throw new Error(`No person found with rank: ${this.rank}`);
  }
  next();
});
export default mongoose.model('Question', QuestionSchema);
