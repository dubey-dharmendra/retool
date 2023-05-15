const userService = require("../services/userServices");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


const signToken = (id) => {
 return jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
 });
};


const createSendToken = async (user) => {
 const token = signToken(user.id);
 // console.log(token);
 return token;
};


exports.login = async (req, res) => {
 try {
  const user = await userService.loggedIn(req.body);
  const { password } = req.body
  if (user) {
   if (password != user.password) {
    return res.status(200).json({
     status: "fail",
     message: "Invalid credential",
    });
   }
   const token = await createSendToken(user, 201, res);
   res.cookie('cookie', token, { maxAge: 50000, httpOnly: true })
   return res.status(200).json({
    status: "success",
    user,
    message: "login sucessfully",
   });
  } else {
   res.status(400).json({
    status: "fail",
    message: `User doesn't exists `,
   });
  }
 } catch (err) {
  res.status(400).json({
   status: "fail",
   message: err,
  });
 }

};

exports.getAll = async (req, res) => {
 try {
  const data = await User.find()
  return res.status(200).json({
   status: "success",
   data,
  });
 } catch (err) {
  res.status(400).json({
   status: "fail",
   message: err,
  });
 }
};

exports.getOne = async (req, res) => {
 try {
  const data = userService.getOne()
  console.log(data);
 } catch (err) {
  console.log(err);
 }
};