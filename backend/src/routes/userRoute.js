const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyUser = require("../middlewares/verifyUser");

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.get("/", verifyUser, userController.getUser);
router.get("/search-user", userController.searchUser);
router.get("/verify-email", userController.verifyEmail);

module.exports = router;
