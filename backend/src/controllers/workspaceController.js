const workspaceModel = require("../models/workspaceModel");
const { delay } = require("../utils/utils");

const getWorkspaces = async function (req, res, next) {
  try {
    await delay(1000);

    const { workspaceId } = req.query;

    let workspacesDocuments;

    if (workspaceId) {
      workspacesDocuments = await workspaceModel.findById(workspaceId);
    } else {
      workspacesDocuments = await workspaceModel.find({
        members: { $in: [req.user._id] },
      });
    }

    return res.status(200).json({
      workspacesDocuments: workspacesDocuments || [],
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getWorkspaces };
