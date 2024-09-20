const express = require("express");
const router = express.Router();
const workspaceInvitationController = require("../controllers/workspaceInvitationController");
const verifyUser = require("../middlewares/verifyUser");

router.post(
  "/handle",
  verifyUser,
  workspaceInvitationController.handleInvitation
);

module.exports = router;
