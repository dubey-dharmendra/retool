const User = require("../models/userModel");

exports.loggedIn = async (userData) => {
 const { email, password } = userData
 return await User.findOne({ email })
};
