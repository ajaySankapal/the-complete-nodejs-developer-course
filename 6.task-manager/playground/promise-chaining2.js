require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.deleteOne({ id: "62fcc71389788e72760b51e9" })
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => console.log(count))
//   .catch((e) => console.log(e));

// Task.findByIdAndDelete("62fcd3fc5212ca2e1579897a")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => console.log(count))
//   .catch((e) => console.log(count));

//async await
const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("62fdf299aea1744dd51a8032")
  .then((count) => console.log(count))
  .catch((e) => console.log(e));
