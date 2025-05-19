import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/start-exam', async (req, res) => {
  const { name, rank } = req.body;

  if (!name || !rank) {
    return res.json({ success: false, message: "Name and rank required" });
  }

  const user = await User.findOne({ name, rank });

  if (!user) {
    return res.json({ success: false, message: "Access denied: invalid credentials" });
  }

  res.json({ success: true, allowed: true });
});

export default router;
