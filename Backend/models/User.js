const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["Student", "Instructor","Admin"],
    required: true,
  },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },

  // can change to array
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },

  image: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  forgotPasswordExpires: {
    type: Date,
  },
  stats: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stats",
  },
});

module.exports = mongoose.model("User", userSchema);
