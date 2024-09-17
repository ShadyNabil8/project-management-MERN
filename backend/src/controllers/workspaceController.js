const workspaceModel = require("../models/workspaceModel");
const userModel = require("../models/userModel");
const { delay } = require("../utils/utils");
const workspaceInvitationModel = require("../models/workspaceInvitationModel");
const { body, validationResult } = require("express-validator");

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
          workspaceId: workspacesDocument._id,
          userId: member._id,
        })
      );

      await workspaceInvitationModel.insertMany(workspaceInvitationDocuments);

      res.status(200).json({
        message: "Workspace created successfully",
        workspaceId: workspacesDocument._id,
      });
    } catch (error) {
      return next(error);
    }
  },
];

module.exports = { getWorkspaces, createWorkspaces };
