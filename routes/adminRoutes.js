import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Hardcoded admin password (for now)
const ADMIN_PASSWORD = process.env.ADMIN_PANEL_PASSWORD || "kenzion is the best";

// Admin login route
router.post('/admin-login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: "Invalid admin password" });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json({ success: true, users });
});

// Add user
router.post('/add-user', async (req, res) => {
  const { name, rank, password } = req.body;
  if (!name || !rank || !password) return res.json({ success: false, message: "All fields required" });

  const exists = await User.findOne({ name, rank });
  if (exists) return res.json({ success: false, message: "User already exists" });

  const user = new User({ name, rank, password });
  await user.save();
  res.json({ success: true });
});

// Update user
router.put('/update-user/:id', async (req, res) => {
  const { name, rank, password } = req.body;
  const updateData = {};

  if (name) updateData.name = name;
  if (rank) updateData.rank = rank;
  if (password) updateData.password = password;

  const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });
  if (!user) return res.status(404).json({ success: false, message: "User not found" });

  res.json({ success: true, user });
});

// Delete user
router.delete('/delete-user/:id', async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: "User not found" });

  res.json({ success: true });
});


export default router;
