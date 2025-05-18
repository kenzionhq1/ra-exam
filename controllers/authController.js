import Result from '../models/Result.js';

export const startExam = async (req, res) => {
  const { name, rank } = req.body;

  const existing = await Result.findOne({ name, rank });
  if (existing) {
    return res.json({
      success: true,
      allowed: false,
      alreadySubmitted: true,
      result: existing
    });
  }

  // Allow first-time users
  return res.json({
    success: true,
    allowed: true
  });
};
