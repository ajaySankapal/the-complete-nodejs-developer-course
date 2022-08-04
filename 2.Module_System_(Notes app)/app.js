//importing your own files

//all the js file has its own scope. you cant use this variables and functions just by importing them. we should explicitely import the variable from the other file
// const name = require("./utils"); // storing the returned value from the exported file
// console.log(name);
const chalk = require("chalk");
// const validator = require("validator");
const getNotes = require("./utils");
const notes = getNotes(
  "hello this is Ajay Sankapal. Working on my backend skills. it is my goal to become the backend developer in the coming 2 months"
);
console.log(notes);
// console.log(validator.isURL("ajaysankapalexamplecom"));
const msg = chalk.green.bold.inverse("Success!!");
console.log(msg);
