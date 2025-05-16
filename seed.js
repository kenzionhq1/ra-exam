const mongoose = require('mongoose');
const Question = require('./models/Question');
require('dotenv').config();

const questions = [
  {
    rank: "Intern",
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    rank: "Senior Intern",
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Enugu"],
    correctAnswer: "Abuja"
  },
  {
    rank: "Senior Envoy",
    question: "Which organ pumps blood?",
    options: ["Lungs", "Heart", "Liver", "Brain"],
    correctAnswer: "Heart"
  },
  {
    rank: "Assistant Intern",
    question: "What color is the sky?",
    options: ["Blue", "Green", "Black", "Orange"],
    correctAnswer: "Blue"
  }
  // Add more for all your ranks...
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Question.deleteMany(); // Optional: clear old data
    await Question.insertMany(questions);
    console.log("Questions seeded!");
    process.exit();
  }).catch(err => {
    console.error("Seeding failed:", err);
    process.exit(1);
  });
