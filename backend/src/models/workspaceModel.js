const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

schema.pre("save", function (next) {
  if (!this.image) {
    const firstChar = this.name.charAt(0).toUpperCase();
    this.image = `${firstChar}.jpeg`;
  }
  next();
});

module.exports = mongoose.model("Workspace", schema);
