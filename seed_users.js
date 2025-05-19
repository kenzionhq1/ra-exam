import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const users = [
  { name: "Kolade Paul", rank: "Senior Intern",   password: "kolade123",},
  { name: "Adeosun Bamishe", rank: "Senior Intern", password: "adeosun123",},
  {name: "Osho Mubarak", rank: "Intern", password: "osho123",},
  {name: "Ajuwon Eniowo", rank: "Intern", password: "ajuwon123",},
  {name: "Opawole Demilade", rank: "Envoy", password: "opawole123",},
  {name: "Olalere Adedayo", rank: "Envoy", password: "olalere123",},
  {name: "Ogunfowora Kehinde", rank: "Special Envoy", password: "ogunfowora123",},
  {name: "Kayode Assabga", rank: "Senior Envoy", password: "kayode123",},
  {name: "Olalere Ayomide", rank: "Senior Envoy", password: "olalereayomide123",},
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await User.deleteMany();
  await User.insertMany(users);
  console.log("Users seeded");
  process.exit();
});
