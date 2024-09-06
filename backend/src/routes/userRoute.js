const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyUser = require("../middlewares/verifyUser");

router.post("/login", userController.login);
router.get("/", verifyUser, userController.getUser);

module.exports = router;
