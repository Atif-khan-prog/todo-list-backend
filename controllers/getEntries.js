import mongoose from 'mongoose';
import { connection, todoSchema } from '../Database/db.js';

connection(); // connect to DB
const Todo = mongoose.model('Todo', todoSchema);

export const getEntries = async (req, res) =>{
     try {
    const entries = await Todo.find();
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Error while fetching', err });
  }
}
