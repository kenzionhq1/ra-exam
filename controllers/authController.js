const User = require('../models/User');

exports.startExam = async (req, res) => {
  const { name, rank } = req.body;

  if (!name || !rank) {
    return res.status(400).json({ success: false, message: 'Name and rank required.' });
  }

  const user = await User.findOne({ name, rank });
  if (!user) {
    return res.status(403).json({ success: false, message: 'You are not registered.' });
  }

  res.json({ success: true, allowed: true });
};
