const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  res.json(req.body);
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
