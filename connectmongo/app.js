const express = require("express");
//const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// trust app to app :
app.use(cors());
app.options("*", cors());

// midleware :
app.use(express.json());


//mongodb://localhost:27017/todosDB

const ConnectionDB = "mongodb+srv://DevZakari:iUzlCQFX8jv5hvFQ@cluster0.jydtk.mongodb.net/todosDB?retryWrites=true&w=majority";

const { Todo } = require("./models/todo");

app.get(`/`, async (req, res) => {
  const todos = await Todo.find();
  if (!todos) {
    res.status(500).json({ success: false, message: "todos doesn t exist" });
  }
  res.send(todos);
});

app.post(`/`, async (req, res) => {
  let newTodo = new Todo({
    name: req.body.name,
  });

  newTodo = await newTodo.save();
  if (!newTodo) {
    return res.status(500).json({
      error: err,
      success: false,
    });
  }
  return res.send(newTodo);
});

mongoose
  .connect(ConnectionDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "todosDB",
  })
  .then(() => {
    console.log("Database connection is ready..");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(27017, () => {
  console.log("listening for requests on port 27017");
});
