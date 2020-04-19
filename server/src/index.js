import express from 'express';
import { debuglog } from 'util';

import appConfig from './config/app.config.js';
import { notFoundError, errorHandler } from './handler.js';
import logRouter from './routes/logs.route.js';

const debug = debuglog('travel_app');
const app = express();


appConfig(app);

app.use('/api/log', logRouter);

app.use(notFoundError);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  debug('Application is running');
});
