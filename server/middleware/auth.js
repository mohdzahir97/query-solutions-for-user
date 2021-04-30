const jwt = require("jsonwebtoken");
const user = require("../model/usersch");

const Auth = async (req, res, next) => {
  try {
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcyYzIxMjEzMDFlZjM4YTgwMWNiYmYiLCJpYXQiOjE2MTgxMzM1ODR9.HtPg5v1Vri0vNZmnke1dVRM4MzcAsYFAwv5lGkh3x5k";
    const token = req.cookies.jwt;
    // console.log(token + " we get cookies");
    const verfyUser = jwt.verify(token, process.env.SEC_key);
    console.log(verfyUser)
    const userRoot = await user.findOne({ _id: verfyUser._id,"tokens.token":token });

    if (!userRoot) {
      console.log("User Not Found");
      throw new Error("User Not Found");
    } else {
      req.token = token;
      req.userRoot = userRoot;
      req.userRoot_id = userRoot._id;
      next();
    }
  } catch (error) {
    res.status(401).send("UnAuthorized Person:No Token Provided...");
    // console.log(error);
  }
};
module.exports = Auth;
