const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    reuqired: true,
  },

  classDescription: {
    type: String,
    trim: true,
  },

  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  thumbnail: {
    type: String,
  },

  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  // key: {
  //   type: String,
  // },
});

module.exports = mongoose.model("Class", classSchema);
