const mongoose = require("mongoose");
// const { ObjectId } = mongoose;
//we want to get the task of the particular owner only .. all the other task we dont want
//so we add a new field in the task schema (owner)
const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
