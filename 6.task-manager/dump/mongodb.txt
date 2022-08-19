//CRUD - Create Read Update Delete

const mongodb = require("mongodb");
const { MongoClient, ObjectID } = mongodb;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID(); ///binary data of 12 bit
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database!");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Ajay Sankapal",
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert the document!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Ajay",
    //       age: 23,
    //     },
    //     {
    //       name: "Sandeep",
    //       age: 21,
    //     },
    //     {
    //       name: "Raju Kapil",
    //       age: 20,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("Unable to insert Users!");
    //     }
    //     console.log(result.insertedIds);
    //   }
    // );

    //new collection
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "To watch NodeJS tutorial!",
    //       completed: true,
    //     },
    //     {
    //       description: "Leetcode question practice",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks!");
    //     }
    //     console.log(result.acknowledged);
    //   }
    // // );
    // db.collection("tasks").insertOne(
    //   {
    //     description: "To check the infrasctucture readiness for TCS NQT exam!",
    //     completed: false,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert task!");
    //     }
    //     console.log(result.insertedId);
    //   }
    // );

    //querying data
    // db.collection("users").findOne(
    //   { _id: new ObjectID("62fb7f64c73d38ed65d809a5") }, //if we provide only the string we dont get any result because this contains the binary data
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    //findone return only the first object matching the condition
    // db.collection("tasks").findOne({ completed: false }, (error, task) => {
    //   if (error) {
    //     return console.log("Unable to fetch");
    //   }
    //   console.log(task);
    // });

    //find return all the object matching the condition
    //find doesnot have callback function,, it returns a cursor which has many useful methods we can perform on the returned objects
    // db.collection("tasks").find({ completed: false }, (error, task) => {
    //   if (error) {
    //     return console.log("Unable to fetch!");
    //   }
    //   console.log(task);
    // });

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("Unable to fetch!");
    //     }
    //     console.log(tasks);
    //   });

    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("62fc836bc4bfb4fe59f05f2d"),
    //   },
    //   {
    //     $inc: {
    //       age: 1,
    //     },
    //   }
    // );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //updateMany
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: true,
    //     },
    //     {
    //       $set: {
    //         completed: false,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //delete all the documents from the collection
    // db.collection("users").deleteMany({});
    db.collection("tasks")
      .deleteOne({ completed: false })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    //end
  }
);
