import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import scoreRoutes from './routes/scoreRoutes.js';  // Route


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));


app.use('/api/v1/score', scoreRoutes);


app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Test Server',
    });
  });

  const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };

startServer();