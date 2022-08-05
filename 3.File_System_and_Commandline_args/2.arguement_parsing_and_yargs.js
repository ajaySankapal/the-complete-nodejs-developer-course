//arguement parsing
//we will use a package "yargs"
const { describe } = require("yargs");
const yargs = require("yargs");
//add, remove, read, list

//we need title which we will pass in the args
// so we define it explicitely in command and pass it in the handler function

//create add command
yargs.command({
  command: "add",
  describe: "add new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body:" + argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove the note",
  handler: function () {
    console.log("Removing the note!");
  },
});

//adding read command
yargs.command({
  command: "read",
  describe: "read the note",
  handler: function () {
    console.log("reading the note!");
  },
});

//adding list command
yargs.command({
  command: "list",
  describe: "list",
  handler: function () {
    console.log("list out the notes!");
  },
});

yargs.parse();
