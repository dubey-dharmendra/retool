const User = require("../models/userModel");

exports.loggedIn = async (userData) => {
 const { email, password } = userData
 const data = await User.findOne({ email })
 if (!data || (password != data.password)) {
  return false;
 }
 return data;
};
