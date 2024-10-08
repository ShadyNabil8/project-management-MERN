const express = require("express");
const router = express.Router();
const spaceController = require("../controllers/spaceController");
const verifyUser = require("../middlewares/verifyUser");

router.get("/", verifyUser, spaceController.getSpaces);
router.post("/create", verifyUser, spaceController.createSpace);

module.exports = router;
