const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
  },
});

module.exports = mongoose.model("WorkspaceInvitation", schema);
