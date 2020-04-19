import express from 'express';
import util from 'util';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';

import { notFoundError, errorHandler } from './handler.js';

const debug = util.debuglog('travel_app');
const app = express();

mongoose.connect('mongodb://localhost/travellog', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
  debug('Something went wrong');
});
db.on('success', () => {
  debug('Database Connected');
});

app.use(morgan('combined'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));


app.use(notFoundError);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  debug('Application is running');
});
