import express from 'express';
import User from '../models/User.js';
import Result from '../models/Result.js';

const router = express.Router();

router.post('/start-exam', async (req, res) => {
  const { name, rank, password } = req.body;

  if (!name || !rank || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }

  const user = await User.findOne({ name, rank });
  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }

  if (user.password !== password) {
    return res.json({ success: false, message: "Incorrect password" });
  }

  const existing = await Result.findOne({ name, rank });
  if (existing) {
    return res.json({ success: true, alreadySubmitted: true, result: existing });
  }

  res.json({ success: true, allowed: true });
});

export default router;
