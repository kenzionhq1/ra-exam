import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dropIndex = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const result = await mongoose.connection.db.collection('results').dropIndex('token_1');
    console.log('✅ Index "token_1" dropped successfully:', result);
    process.exit();
  } catch (err) {
    if (err.codeName === 'IndexNotFound') {
      console.log('⚠️ Index "token_1" does not exist — nothing to drop.');
    } else {
      console.error('❌ Failed to drop index:', err);
    }
    process.exit(1);
  }
};

dropIndex();
