require("dotenv").config();
const workspaceModel = require("../models/workspaceModel");
const workspaceInvitationsModel = require("../models/workspaceInvitationModel");
const spaceModel = require("../models/spaceModel");
const listModel = require("../models/listModel");
const crypto = require("crypto");
const verificationCodeModel = require("../models/verificationCodeModel");
const { sendVerificationCode } = require("./email");

const delay = async (time) => {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const getUserInitialData = async (userDocument) => {
  try {
    const [workspaceInvitations, workspacesDocuments] = await Promise.all([
      workspaceInvitationsModel
        .find({
          userId: userDocument._id,
        })
        .select("workspace")
        .populate({
          path: "workspace",
          select: "name",
        })
        .lean(),
      workspaceModel
        .find({
          members: { $in: [userDocument._id] },
        })
        .select("owner name members")
        .lean(),
    ]);

    // Get the workspace IDs from the workspacesDocuments
    const workspaceIds = workspacesDocuments.map((workspace) => workspace._id);

    //  Fetch spaces that are associated with these workspaces
    const spacesDocuments = await spaceModel
      .find({
        workspaceId: { $in: workspaceIds },
      })
      .select("name workspaceId")
      .lean();

    // Get the space IDs from the spacesDocuments
    const spaceIds = spacesDocuments.map((space) => space._id);

    const listsDocuments = await listModel
      .find({
        space: { $in: spaceIds },
      })
      .select("name space")
      .lean();

    // Associate lists with their respective spaces
    const spacesWithLists = spacesDocuments.map((space) => {
      return {
        ...space,
        lists: listsDocuments.filter(
          (list) => String(list.space) === String(space._id)
        ),
      };
    });

    // Associate spaces with their respective workspaces
    const workspacesWithSpaces = workspacesDocuments.map((workspace) => {
      return {
        ...workspace,
        spaces: spacesWithLists.filter(
          (space) => String(space.workspaceId) === String(workspace._id)
        ),
      };
    });

    return [workspacesWithSpaces, workspaceInvitations];
  } catch (error) {
    console.error("Error fetching initial data:", error);
    throw error;
  }
};

const generateAndSendVerificationCode = async (userDocument) => {
  const verificationCode = crypto.randomBytes(3).toString("hex");
  const verificationExpires = Date.now() + 3600000; // 1 Hour

  const verificationRecord = new verificationCodeModel({
    userId: userDocument._id,
    verificationCode,
    expiresAt: verificationExpires,
  });

  await verificationRecord.save();

  await sendVerificationCode(userDocument.email, verificationCode);
};

module.exports = { delay, getUserInitialData, generateAndSendVerificationCode };
