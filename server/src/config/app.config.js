import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import { debuglog } from 'util';
import dotenv from 'dotenv';

dotenv.config();

const appConfig = (app) => {
  const debug = debuglog(process.env.APP_DEBUG);
  mongoose.connect(process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  const db = mongoose.connection;

  db.on('error', () => {
    debug('Something went wrong');
  });
  db.on('success', () => {
    debug('Database Connected');
  });

  app.use(express.json());
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(cors({
    origin: 'http://localhost:3000',
  }));
};

export default appConfig;
