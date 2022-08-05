const fs = require("fs");
// const chalk = require("chalk");
const color = require("colors");

//addint notes to the list
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(color.green.inverse("New Note added!"));
  } else {
    console.log(color.red.inverse("title taken!"));
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const getNotes = () => {
  return "Your notes....";
};

//remove notes
const removeNote = (title) => {
  const notes = loadNotes();
  const resultantNotes = notes.filter((note) => note.title != title);
  saveNotes(resultantNotes);
  if (notes.length !== resultantNotes.length) {
    const msg = color.green.inverse("Note removed Successfully!!!");
    console.log(msg);
  } else {
    console.log(color.red.inverse("Title not found!!!"));
  }
};

//listing notes
const listNote = () => {
  const notes = loadNotes();
  console.log(color.inverse("Your Notes"));
  notes.forEach((note) => console.log(note.title));
};

//readnote
const readNote = (title) => {
  const notes = loadNotes();
  const notestoread = notes.find((note) => note.title === title);
  if (notestoread) {
    console.log(color.inverse(notestoread.title));
    console.log(notestoread.body);
  } else {
    console.log(color.red.inverse("Title not found!!!"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
