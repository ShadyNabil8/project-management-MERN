const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  space: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Space",
  },
});

module.exports = mongoose.model("List", schema);
