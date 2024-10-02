const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  workspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
  },
  taskStatuses: {
    notStarted: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskStatus" }],
    active: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskStatus" }],
    done: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskStatus" }],
    closed: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskStatus" }],
  },
});

module.exports = mongoose.model("Space", schema);
