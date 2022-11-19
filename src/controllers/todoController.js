const Todo = require("../models/Todo");

// add a todo task

exports.addTodo = async (req, res) => {
  try {
    let todo = await req.body;
    let addTodoTask = await Todo.create(todo);
    if (!addTodoTask)
      return res.status(404).json({
        success: false,
        message: "Unable to add Todo task",
      });
    return res.status(201).json({
      sucess: true,
      message: "You have sucessfully created a Todo task",
      todo: addTodoTask,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// get all todos

exports.getAllTodos = async (req, res) => {
  try {
    let todos = await Todo.find();
    if (todos.length === 0)
      return res.status(404).json({
        sucess: false,
        message: "No Todo found",
      });
    res.status(200).json({
      success: true,
      message: "Here are all Todo tasks",
      todos,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// update todo task

exports.updateTodo = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let todo = await req.body;
    let updateTodoTask = await Todo.findOneAndUpdate(id, todo, { new: true });
  
    if (!updateTodoTask)
      return res.status(404).json({
        success: false,
        message: "Todo task not updated",
      });
    return res.status(200).json({
      sucess: true,
      message: "Sucessfully Updated Todo task",
      todo: updateTodoTask,
    });
  } catch (err) {
    res.status(500).json ({
      sucess: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// delete todo task

exports.deleteTodo = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let deleteTodoTask = await Todo.findOneAndRemove(id);
  
    if (!deleteTodoTask)
      return res.status(400).json({
        success: false,
        message: "Todo task not deleted",
      });
    return res.status(200).json({
      sucess: true,
      message: "Sucessfully deleted Todo task",
    });
  } catch (err) {
    res.status(500).json ({
      sucess: false,
      message: "Internal server error",
      error: err.message,
    });
  }
}
