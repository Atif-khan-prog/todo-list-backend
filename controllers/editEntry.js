import mongoose from "mongoose";
import { connection, todoSchema } from "../Database/db.js";

connection();

const Todo = mongoose.model("Todo", todoSchema);

export const editEntry = async (req, res) => {
  const { id, title, description } = req.body;

  try {
    const updated = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } 
    );

    if (!updated) {
      return res.status(404).json({ ok: false, message: "Record not found" });
    }

    return res
      .status(200)
      .json({ ok: true, message: "Updated successfully", data: updated });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
};
