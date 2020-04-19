import { Schema } from 'mongoose';

const logEntry = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  latitude: {
    type: Number,
    required: true,
    min: -89.9999999,
    max: 89.9999999,
  },
  longitude: {
    type: Number,
    required: true,
    min: -179.999999999,
    max: 179.99999999999,
  },
  visitData: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});
