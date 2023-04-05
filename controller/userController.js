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
  const data = await userService.loggedIn(req.body);
  if (data) {
   const token = await createSendToken(data, 201, res);
   return res.status(200).json({
    status: "success",
    token,
    message: "login sucessfully",
   });
  } else {
   res.status(400).json({
    status: "fail",
    message: 'Invalid Credentials',
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