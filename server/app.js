const express = require("express");
const responseTime = require("response-time");
const expensiveTask = require("./utils/expensiveTask");

const { addTask, startWorker, tasksEndpoint } = require("./utils/taskRunner");

const app = express();
tasksEndpoint(app);
startWorker();
app.use(responseTime());

app.get("/", function (req, res) {
  const n = parseInt(req.query.n);
  // heavy server work here
  addTask(expensiveTask, n);
  // res.status(200).json({ result });
  res.json({ status: "task-started" });
});

module.exports = app;
