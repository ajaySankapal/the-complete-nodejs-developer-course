const express = require("express");
const { ObjectId } = require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();

const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintenance! Please try after sometime ");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const pet = {
  name: "Hale",
};
pet.toJSON = function () {
  return pet;
};
console.log(pet.toJSON());
