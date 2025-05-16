const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const users = [
  { name: "Grace Uche", rank: "Intern" },
  { name: "Musa Bello", rank: "Senior Intern" },
  { name: "Fatima Lawal", rank: "Senior Envoy" },
  { name: "Adamu Garba", rank: "Envoy" }
  // Add all allowed candidates here
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await User.deleteMany(); // Optional: clean old list
    await User.insertMany(users);
    console.log("Users added!");
    process.exit();
  }).catch(err => {
    console.error("Error:", err);
    process.exit(1);
  });
