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

const port = process.env.PORT || 1337;
app.listen(port, () => {
  debug('Application is running');
});
