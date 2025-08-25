import mongoose from 'mongoose';

export const connection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todolist_db');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error while connecting to MongoDB:', err);
  }
};

export const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  createdAt:  String
});
