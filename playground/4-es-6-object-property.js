const name = "Ajay";
const age = 23;
const user = {
  name,
  age,
  location: "Bhopal",
};
console.log(user);

const product = {
  label: "Red Notebook",
  stock: 152,
  price: 20,
  salePrice: undefined,
};
// const stock = product.stock; //this is a lot off code...the simple solution is object destructuring
// console.log(stock);

const { stock, label: productLabel } = product; //can rename the variable also
console.log(productLabel);

//we can also pass the object destructuring in the function as arguement
const transaction = (type, { label, stock } = {}) => {
  //in this function in the second arguement we are using object destructuring,, at the time of function invoking we have to use the second arguement as object.. if we dont use the second parameter as object our app will break.. to avoid this we can set default parameter in this function we can use empty object in the second arguement...by this we are destructuring the empty object so we are getting the undefined value in the console
  console.log(type, label, stock);
};
transaction("order");

const greet = (name = "user") => {
  //if we are not providing any value then we will get undefined,,,to avoid this we can use default value that will be displayed when we are not providing any value
  console.log(`Hello ${name}`);
};

greet("Ajay");
