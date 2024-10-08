const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");
const verifyUser = require("../middlewares/verifyUser");

router.get("/", verifyUser, listController.getList);
router.post("/create", verifyUser, listController.createList);

module.exports = router;
