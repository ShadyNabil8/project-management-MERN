const workspaceModel = require("../models/workspaceModel");
const { CustomError } = require("../middlewares/errorHandler");
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

    if (!workspacesDocuments) {
      throw new CustomError("Workspace not found", 404);
    }

    return res.status(200).json({
      workspacesDocuments,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getWorkspaces };
