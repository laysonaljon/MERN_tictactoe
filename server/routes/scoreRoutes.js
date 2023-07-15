import express from 'express';
import * as dotenv from 'dotenv';
import Score from '../mongodb/models/score.js';

dotenv.config();

const router = express.Router();

// Get All Scores
router.route('/').get(async (req, res) => {
  try {
    const scores = await Score.find({});
    res.status(200).json({ success: true, data: scores });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching scores failed, please try again' });
  }
});

// Save Score
router.route('/').post(async (req, res) => {
  try {
    const { player1name, player1score, player2name, player2score } = req.body;

    const newScore = await Score.create({
        player1name, 
        player1score, 
        player2name, 
        player2score 
    });

    res.status(200).json({ success: true, data: newScore });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to record score, please try again' });
  }
});

export default router;