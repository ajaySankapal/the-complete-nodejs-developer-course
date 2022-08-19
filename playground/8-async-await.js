//async function always returns promise.. we can make any function async by just putting name async before the function declaration

//async await make it easy to work with asynchrounous promise based code

//this is a Promise
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(1, 33);
  const sum2 = await add(sum, 6);
  const sum3 = await add(sum2, 60);
  return sum3;
};
//the above async function return promise we can do all the things we can perform on promises
doWork()
  .then((result) => {
    console.log("result !", result);
  })
  .catch((e) => {
    console.log(e);
  });
