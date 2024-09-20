const express = require("express");
const router = express.Router();
const spaceController = require("../controllers/spaceController");
const verifyUser = require("../middlewares/verifyUser");

router.get("/", verifyUser, spaceController.fetchSpaces);

module.exports = router;
