const express = require("express");
const auth = require("../middleware/auth");
const multer = require("multer");
const sharp = require("sharp");
const router = new express.Router();
const User = require("../models/user");
const {
  sendWelcomeEmail,
  sendCancellationEmail,
} = require("../emails/accounts");
//create user
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    //no need to generate the token before save because the generateAuthToken also had the code to save the user
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400);
    res.send(error);
  }
});
//login user
router.post("/users/login", async (req, res) => {
  try {
    //here we are invoking our own method on the user model ... so we have to define this model in the user model.. we can do so by defining it in the user schema.. userSchema.statics.findByCredentials = function(....)
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    //user is logged in if the user has this token
    //we can maintain this tokens.. bcz if the user tries to login through diffrente devices and if logout from one of them it will be logged in on other devices
    //we can do this by providing the separate field for the token in the user model and save it to the database
    // res.send({ user: user.getPublicProfile(), token });
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//logout the user
router.post("/users/logout", auth, async (req, res) => {
  try {
    //we access the tokens array and remove(filter out the token)
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    //now if you have deleted the token save the user with new data
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//logoutAll
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//get all the users
// router.get("/users", auth, async (req, res) => {
//   //User is the name of the model.. we can perform varios methods on this model....there is a find method if we provide empty object it will return all the users
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }
// }); //here with this route we are getting all the users which is not that is practiced as we are getting all the users email and password ... so after authenticating we are advised to get only the user self profile
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

//get single user by providing id
//we have access to the parameters we pass with the url.. by req.params
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

//update the user by providing id in the req params
router.patch("/users/me", auth, async (req, res) => {
  // req.params.id will provide us the id in the url.... the thing we want to update we are passing us req.body because will provide the update in the body in the json format just like we created the user
  //when we are setting new: true we are returning completely new user by updating the desired fields

  //what if the user try to update the field which is not there...we can return an error
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid update!" });
  }
  try {
    //findByIdAndUpdate -- bypasses mongoose and perforn direct operation on the database
    //bracket notation??

    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    // const user = await User.findById(req.user._id);
    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });
    await req.user.save();
    // if (!user) {
    //   return res.status(404).send();
    // }
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});
//deleting the user //we can't delete the other user,, we can only delete our own profile so refactoring this request
router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id);
    // if (!user) {
    //   return res.status(404).send();
    // }
    const email = req.user.email;
    const name = req.user.name;
    await req.user.remove();
    sendCancellationEmail(email, name);
    res.send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});
const upload = multer({
  //destination where the file gonna be saved
  //we want to store the file in the db in the user schema with the field "avatar"
  // dest: "avatars",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
});
// the value in the request form-data should be matched with the value provided in the quote(arguement)
router.post(
  "/users/me/avatars",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

//delete the avatar
router.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.send();
});

//get the avatar image in the response
router.get("/users/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error();
    }
    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
