const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    //now we have to verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //decoded is the payload which contains the id(the same id which the user has) we generated during the generateAuthToken... so we can get the user by this decoded.id
    //we also has to check the user has the token present at the time we are making this request because when we are logging out the user we will have to delete the tokens so to return the user by authenticating it make sure it has the token present there
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    //if we have fetched the user so store it somewhere so that the route handler dont need to fetch this user again.. in the route handler we can send this stored user
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate!" });
  }
};
module.exports = auth;

//to use middlewar to the individual route we pass that middleware as arguement in the route middleware

//like this auth middleware we want to use it in the middleware after the sign-up and login

//we pass auth as the second arguement in that middlewares before the route handler so this auth middleware will run before the route handler and it will only run if we have called next() in this auth middleware

//the whole authentication process with the client getting that authentication token for signing up and logging in and providing it with the request they are  trying to perform

//get the latest authentication token and provide it with the request header we are trying to perform

//to set the header go to the request you are trying to perform in the header set the key:value pair of
//Authorization Bearer the_token_you_have_copied
