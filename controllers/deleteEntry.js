import mongoose from 'mongoose'
import { connection, todoSchema } from '../Database/db.js'

connection();

const Todo = mongoose.model('Todo', todoSchema);

export const deleteEntry = async (req, res) => {
    let { id } = req.params;

    if (!id) return res.status(400).json({ message: 'Missing id param' });

    try {
        let entry = await Todo.findByIdAndDelete(id);

        if (!entry) return res.status(404).json({ message: 'Entry not found' });

        return res.status(200).json({ message: 'Deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Error deleting entry', error: err.message });
    }
};
