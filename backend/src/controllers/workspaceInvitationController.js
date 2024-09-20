const workspaceModel = require("../models/workspaceModel");
const userModel = require("../models/userModel");
const { delay } = require("../utils/utils");
const workspaceInvitationModel = require("../models/workspaceInvitationModel");

// This route is used to either add the user to the workspace or neglect the invitation and take on action.
const handleInvitation = async (req, res, next) => {
  await delay(1000);
  try {
    const { isInvitationAccepted, workspaceInvitation } = req.body;
    const user = req.user;

    if (!workspaceInvitation || !workspaceInvitation.workspace?._id) {
      return res
        .status(404)
        .json({ message: "Invalid invitation data provided!" });
    }

    const workspaceDocument = await workspaceModel.findById(
      workspaceInvitation.workspace._id
    );

    if (!workspaceDocument) {
      return res.status(404).json({ message: "Workspace not found!" });
    }

    if (workspaceDocument.members.map(String).includes(String(user._id))) {
      return res
        .status(400)
        .json({ message: "User has beed already joined this workspace" });
    }

    if (isInvitationAccepted) {
      // Add the user to the workspace members list, but ensure they aren't added twice
      await workspaceModel.findByIdAndUpdate(
        workspaceInvitation.workspace._id,
        {
          $addToSet: { members: user._id }, // Avoid duplicates
        }
      );
    }

    await workspaceInvitationModel.findByIdAndDelete(workspaceInvitation._id);

    return res.status(200).json({
      message: isInvitationAccepted
        ? "Invitation accepted and user added to the workspace."
        : "Invitation rejected and removed.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleInvitation };
