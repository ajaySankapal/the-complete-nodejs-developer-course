//adding and removing notes
const { describe } = require("yargs");
const yargs = require("yargs");
const notes = require("./4-notes");

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
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove the note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

//adding read command
yargs.command({
  command: "read",
  describe: "read the note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

//adding list command
yargs.command({
  command: "list",
  describe: "list",
  handler: () => {
    notes.listNote();
  },
});

yargs.parse();
