const mongoose = require("mongoose");
const spaceModel = require("./spaceModel");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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

// schema.post("save", async function () {
//   try {
//     await spaceModel.create({
//       name: "Team Space",
//       workspaceId: this._id,
//     });
//   } catch (error) {
//     console.error("Error creating space:", error);
//   }
// });

module.exports = mongoose.model("Workspace", schema);
