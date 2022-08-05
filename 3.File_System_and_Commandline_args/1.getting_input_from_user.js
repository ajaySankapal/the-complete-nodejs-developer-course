//taking input from the users
//commandline args.
//we can pass the data we want to use in form of command line arguement and use that in our application
//that data is stored in "process.argv" argv - arguement vector

const chalk = require("chalk");
const getNotes = require("./utils");
const notes = getNotes(
  "hello this is Ajay Sankapal. Working on my backend skills. it is my goal to become the backend developer in the coming 2 months"
);
console.log(notes);
const msg = chalk.green.bold.inverse("Success!!");
console.log(msg);
const command = process.argv[2];
if (command === "add") {
  console.log("adding note!");
} else if (command === "remove") {
  console.log("removing note!");
}
