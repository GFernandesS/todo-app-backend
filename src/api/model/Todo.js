import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const { Schema } = mongoose;

const Todo = mongoose.model(
  "Todo",
  Schema({
    _id: { type: String, required: true, default: uuidv4() },
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: Date.now() },
  }),
  "Todo"
);

export { Todo };
