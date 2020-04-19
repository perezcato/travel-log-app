import express from 'express';

import LogEntry from '../models/LogEntry.js';

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  try {
    res.status(200);
    const logs = await LogEntry.find();
    res.json(logs);
  } catch (e) {
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = await new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (e) {
    res.status(422);
    next(e);
  }
});

export default router;
