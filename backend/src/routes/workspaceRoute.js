const express = require("express");
const router = express.Router();
const workspaceController = require("../controllers/workspaceController");
const verifyUser = require("../middlewares/verifyUser");

router.get("/", verifyUser, workspaceController.getWorkspaces);

module.exports = router;
