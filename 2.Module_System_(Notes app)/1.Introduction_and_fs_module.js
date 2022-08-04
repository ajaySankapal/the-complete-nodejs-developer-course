//we use nodejs module, some external modules and the module defined by us also

//1. file system module -> use to read file and write file
//fs.writeFileSync()  -- took two arguements 1."name of the file"  2."content of the file"
const fs = require("fs");
fs.writeFileSync(
  "Notes.txt",
  "This is a note from Ajay Sankapal created by nodejs."
);
fs.appendFileSync("Notes.txt", " The challenge1 is done I think");
