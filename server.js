const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const examRoutes = require('./routes/examRoutes');
app.use('/api', authRoutes);
app.use('/api', examRoutes);

app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }).catch(err => console.error('MongoDB error:', err));
