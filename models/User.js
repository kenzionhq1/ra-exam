import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true }
});
UserSchema.index({ name: 1, rank: 1 }, { unique: true });
export default mongoose.model('User', UserSchema);
