const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json(task);
};

const getTask = (req, res) => {
  const { taskId } = req.params;
  console.log(req.params);
  res.send("single task with id " + req.params.id);
};

const updateTask = (req, res) => {
  res.send("edit task with id " + req.params.id);
};

const deleteTask = (req, res) => {
  res.send("delete task with id " + req.params.id);
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
