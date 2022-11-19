const router = require("express").Router();

const controller = require("../controllers/todoController");

router
  .get("/", controller.getAllTodos)
  .post("/", controller.addTodo)
  .put("/:id", controller.updateTodo)
  .delete("/:id", controller.deleteTodo);

module.exports = router;
