const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", schema);
