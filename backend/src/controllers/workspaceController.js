const workspaceModel = require("../models/workspaceModel");
const userModel = require("../models/userModel");
const { delay } = require("../utils/utils");
const workspaceInvitationModel = require("../models/workspaceInvitationModel");
const { body, validationResult } = require("express-validator");

const getWorkspaces = async function (req, res, next) {
  try {
    await delay(1000);

    const { workspaceId } = req.query;
    const user = req.user;

    let workspacesDocuments;

    if (workspaceId) {
      const workspaceDocument = await workspaceModel
        .findById(workspaceId)
        .lean();

      if (!workspaceDocument) {
        return res.status(404).json({
          message: "Workspace doesn't exist anymore.",
        });
      }

      if (!workspaceDocument.members.map(String).includes(String(user._id))) {
        return res
          .status(400)
          .json({ message: "You don't have access to this Workspace." });
      }

      workspacesDocuments = [workspaceDocument]; // Wrap in an array for consistency
    } else {
      workspacesDocuments = await workspaceModel
        .find({
          members: { $in: [req.user._id] },
        })
        .lean();
    }
    return res.status(200).json({
      workspacesDocuments,
    });
  } catch (error) {
    return next(error);
  }
};

const createWorkspaces = [
  body("name").isLength({ min: 1 }).withMessage("Workspace name is required!."),
  async function (req, res, next) {
    try {
      await delay(1000);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
      }

      const { name, invitedMembers } = req.body;

      const workspacesDocument = await workspaceModel.create({
        name,
        owner: req.user._id,
        members: [req.user._id],
      });

      const invitedMembersDocuments = await userModel.find({
        email: { $in: invitedMembers },
      });

      const workspaceInvitationDocuments = invitedMembersDocuments.map(
        (member) => ({
          workspace: workspacesDocument._id,
          userId: member._id,
        })
      );

      await workspaceInvitationModel.insertMany(workspaceInvitationDocuments);
      console.log(workspaceInvitationDocuments);
      console.log(invitedMembers);
      
      res.status(200).json({
        message: "Workspace created successfully",
        workspace: workspacesDocument,
      });
    } catch (error) {
      return next(error);
    }
  },
];

module.exports = { getWorkspaces, createWorkspaces };
