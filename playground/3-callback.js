//function provided as an arguement to other function with the intention to call it later
// const names = ["Sandeep", "Raju", "Arun", "Jaimal"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });
// console.log(shortNames);
// // const geoCode = (address, callback) => {
// //   setTimeout(() => {
// //     const data = {
// //       latitude: 0,
// //       longitude: 0,
// //     };
// //     return data;
// //   }, 2000);
// // };
// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };
// // const data = geoCode("Bhopal");
// // console.log(data); ///got undefined immidiately. bcz if the interpreter sees setTimeout it place it to the node api and after the function get executed it get pushed into the callback queue. after registering the setTimeout the nodejs proceed to the next instruction where we are storing the result of the function(geoCode) to the data and consoling it. this instruction are synchronous so it doesnt wait for none thats why when we are storing the result of geocode in data it store the undefined because the geocode is async instruction and it is waiting for the callstack to get empty so we get undefined in the data.
// //we can handle this by providing callback
// geoCode("bhopal", (data) => {
//   console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
// const add = (a, b, callback) => {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 2000);
// };
// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });
const ans = process.argv[2];
console.log(ans);
