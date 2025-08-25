import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();
export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      dbName: 'todo-db'
    });
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
