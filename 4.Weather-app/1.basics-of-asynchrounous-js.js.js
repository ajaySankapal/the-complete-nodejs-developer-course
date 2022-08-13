//basics of asynchrounous javascript
console.log("Starting");

setTimeout(() => {
  console.log("async code");
}, 3000);

setTimeout(() => {
  console.log("after 2 sec");
}, 2000);

console.log("stoppping");
