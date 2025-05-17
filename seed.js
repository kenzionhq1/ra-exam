import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Question from './models/Question.js';

dotenv.config();

const questions = [
  {
    rank: "Intern",
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  }
  // Add more per rank
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Question.deleteMany();
  await Question.insertMany(questions);
  console.log("Questions seeded");
  process.exit();
});
