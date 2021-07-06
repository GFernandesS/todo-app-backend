import { Todo } from "../model/Todo.js";
import { v4 as uuidv4 } from "uuid";

export const get = async () => {
  return await Todo.find();
};

export const getById = async (id) => {
  return (await Todo.find({ _id: id })).find(Boolean);
};

export const create = async (todo) => {
  const _id = uuidv4();
  await Todo.create({ ...todo, _id });
  return _id;
};

export const update = async (id, todoUpdated) => {
  const updateDefinition = {
    description: todoUpdated.description,
  };

  if (todoUpdated.done) updateDefinition.done = todoUpdated.done;

  const result = await Todo.updateOne({ _id: id }, updateDefinition);

  if (!result.n) throw new Error("Todo not found");
};
