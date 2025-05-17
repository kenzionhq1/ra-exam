import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const users = [
  { name: "Grace Uche", rank: "Intern" },
  { name: "Fatima Bello", rank: "Senior Envoy" }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await User.deleteMany();
  await User.insertMany(users);
  console.log("Users seeded");
  process.exit();
});
