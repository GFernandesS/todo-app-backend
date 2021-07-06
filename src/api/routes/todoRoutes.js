import * as todoServices from "../services/todoService.js";

export default (app) => {
  app.post("/todo", async (req, res) => {
    const id = await todoServices.create(req.body);
    res.json(id);
  });

  app.get("/todo", async (_, res) => {
    const todos = await todoServices.get();
    res.json(todos);
  });

  app.get("/todo/:id", async (req, res) => {
    const todo = await todoServices.getById(req.params.id);
    res.json(todo);
  });

  app.patch("/todo/:id", async (req, res) => {
    try {
      await todoServices.update(req.params.id, req.body);
      res.status(200).send();
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  });
};
