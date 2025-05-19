import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import adminRoutes from './routes/adminRoutes.js';


import authRoutes from './routes/authRoutes.js';
import examRoutes from './routes/examRoutes.js';

dotenv.config();

const app = express(); // ✅ MUST be declared before use
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(compression()); // ✅ Correct placement
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', examRoutes);
app.use('/api', adminRoutes);


// Ping route to keep Render awake
app.get('/api/ping', (req, res) => {
  res.send('PONG');
});

// Serve frontend files
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
