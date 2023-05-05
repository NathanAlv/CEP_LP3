import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { connectToMongoDB } from './database';
import { cepsRouter } from './routes/ceps';

connectToMongoDB();

export const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/ceps', cepsRouter);

app.get('/', (req, res) => res.send('Postal Code API'));