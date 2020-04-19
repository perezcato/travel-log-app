import express from 'express';
import util from 'util';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const debug = util.debuglog('travel_app');
const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));


app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(400);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = req.statusCode === 200 ? 500 : req.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: error.stack,
  });
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  debug('Application is running');
});
