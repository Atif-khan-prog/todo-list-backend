import mongoose from 'mongoose';
import { connection, todoSchema } from '../Database/db.js';

const Todo = mongoose.model('Todo', todoSchema);

connection();

export const saveNewEntry = async (req, res) => {
    let { title, description, createdAt } = req.body;
    try {
        const newTodo = new Todo({
            title, 
            description,
            createdAt
        });
        await newTodo.save();
        return res.status(201).json({ message: 'Entry Saved' });
    } catch (err) {
        return res.status(400).json({ message: 'Error while saving', error: err.message });
    }
};
