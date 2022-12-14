const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();

const port = process.env.PORT;

// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintenance! Please try after sometime ");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//how to establish the relationship between user and task
const Task = require("./models/task");
const User = require("./models/user");

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
