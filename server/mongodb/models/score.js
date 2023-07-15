import mongoose from 'mongoose';

const Score = new mongoose.Schema({
  player1name: { type: String, required: true },
  player1score: { type: Number, required: true },
  player2name: { type: String, required: true },
  player2score: { type: Number, required: true },
});

const ScoreSchema = mongoose.model('Score', Score);

export default ScoreSchema;