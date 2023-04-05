
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Please tell your  Name"],
  trim: true,
 },
 email: {
  type: String,
  required: [true, "Please tell your  Email"],
  trim: true,
 },
 password: {
  type: String,
  required: [true, "Please tell your  Email"],
  trim: true,
 },
 phone: {
  type: Number,
  required: [true, "Please tell your  Email"],
  trim: true,
 },
})
const User = mongoose.model("users", userSchema);
module.exports = User






