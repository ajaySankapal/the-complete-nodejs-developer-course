// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([5, 4, 11]);
//     reject("Things went wrong!");
//   }, 2000);
// });

// //promise is nothing but a object with few methods that we can access

// doWorkPromise
//   .then((result) => {
//     console.log("Success!", result);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

//
//                              fulfilled (resolve())
//                            /
//  promise   --pending --->
//                            \
//                              rejected (reject())
//

//promise chaining

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => console.log(e));
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//the above  code be simplified by using promise chaining

add(1, 2)
  .then((sum) => {
    console.log(sum);
    return add(sum, 6);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((e) => console.log(e));
