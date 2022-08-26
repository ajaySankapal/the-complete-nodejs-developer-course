require("../6.task-manager/src/db/mongoose");
const User = require("../6.task-manager/src/models/user");

//promise chaining on the models of mongoose
// User.findByIdAndUpdate("62fcce75a7f414894a68ca74", { age: 21 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 21 });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => console.log(e));

// User.findByIdAndUpdate("62fde484c708a259c6b2f4a4", { age: 22 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 22 });
//   })
//   .then((count) => console.log(count))
//   .catch((e) => console.log(e));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};
updateAgeAndCount("62fcce75a7f414894a68ca74", 22)
  .then((count) => console.log(count))
  .catch((e) => console.log(e));
