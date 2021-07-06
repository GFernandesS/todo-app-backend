import express from "express";

const port = 3033;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log(`Running on port ${port}`));
