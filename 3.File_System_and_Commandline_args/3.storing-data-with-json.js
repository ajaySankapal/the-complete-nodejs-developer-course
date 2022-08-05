//storing data into json
//fs core module only knows how to work with string

//the data which is come by readFileSync is not string it is  a buffer
//to get our original data we use .toString() method

const fs = require("fs");
// const book = {
//   title: "Atomic Habits",
//   author: "James Clear",
// };
// const bookJson = JSON.stringify(book);
// const bookstring = JSON.parse(bookJson);

// fs.writeFileSync("3-json.json", bookJson);
// const dataBuffer = fs.readFileSync("3-json.json");
// const datajson = dataBuffer.toString();
// const data = JSON.parse(datajson);
// console.log(data.author);

//challenge

const dataBuffer = fs.readFileSync("3-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Ajay";
data.age = 23;
const userJSON = JSON.stringify(data);
fs.writeFileSync("3-json.json", userJSON);
