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

schema.pre("findByIdAndDelete", async function (next) {
  try {
    // Fetch the workspace to be deleted
    const workspace = await this.model.findOne(this.getQuery());
    if (workspace) {
      // Delete all spaces that have the workspace's ID
      await spaceModel.deleteMany({ workspaceId: workspace._id });
    }
    next(); // Proceed with workspace deletion
  } catch (error) {
    next(error); // Pass the error if something goes wrong
  }
});

module.exports = mongoose.model("Workspace", schema);
