const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//creation of the schema... this is also done by the mongoose behind the scene... by defining userSchema explicitely we can take advantage of the middlewares... by middleware we can perform some function based on before or after some event
const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {
      // if (validator.equals(value, "password")) {
      //   throw new Error(`Password can not be "password"!!`);
      // }
      if (value.toLowerCase().includes("password")) {
        throw new Error(`Password cannot contain "password"`);
      }
    },
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
});
//instance methods
//when we pass the object in the res.send ...it calls JSON.strigify(object) behind the scene
// userSchema.methods.getPublicProfile = function () {
//   const user = this;
//   const userObject = user.toObject();
//   delete userObject.password;
//   delete userObject.tokens;
//   return userObject;
// };

//alternate way
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismynewnodeapp");
  //append the token in the tokens array and save it
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//userSchema.statics -- models methods
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login!");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login!");
  }
  return user;
};

//hashing the plain text password before saving
//middleware is not running all the time we are saving the user ..
userSchema.pre("save", async function (next) {
  //next here is used to call the next function.. when we don't use next the code got stuck here itself and dont run the next code
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
