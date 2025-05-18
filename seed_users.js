import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const users = [
  { name: "Kolade Paul", rank: "Senior Intern" },
  { name: "Adeosun Bamishe ", rank: "Senior Intern" },
  {name: "Osho Mubarak", rank: "Assistant Intern"},
  {name: "Ajuwon Eniowo", rank: "Intern"},
  {name: "Opawole Demilade", rank: "Envoy"},
  {name: "Olalere Adedayo", rank: "Envoy"},
  {name: "Ogunfowora Kehinde", rank: "Assistant Intern"},
  {name: "Kayode Assabga", rank: "Senior Envoy"},
  {name: "Olalere Ayomide", rank: "Senior Envoy"},
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await User.deleteMany();
  await User.insertMany(users);
  console.log("Users seeded");
  process.exit();
});
