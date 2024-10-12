const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyUser = require("../middlewares/verifyUser");

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login a user
 *     description: Login a user with email and password. Returns access and refresh tokens on success.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     fullName:
 *                       type: string
 *                     email:
 *                       type: string
 *                     _id:
 *                       type: string
 *                     isVerified:
 *                       type: boolean
 *                     workspaceInvitations:
 *                       type: array
 *                       items:
 *                         type: object
 *                     workspaces:
 *                       type: array
 *                       items:
 *                         type: object
 *       401:
 *         description: Incorrect password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Incorrect password
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 */

router.post("/login", userController.login);

/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Register a user
 *     description: REgister a user with fullName, email, and password. Returns access and refresh tokens on success.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "Shady Nabil"
 *               email:
 *                 type: string
 *                 example: "shadyngheith@gmail.com"
 *               password:
 *                 type: string
 *                 example: "12345678"
 *     responses:
 *       200:
 *         description: Successful signup
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 accessToken:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     fullName:
 *                       type: string
 *                     email:
 *                       type: string
 *                     _id:
 *                       type: string
 *                     isVerified:
 *                       type: boolean
 *                     workspaceInvitations:
 *                       type: array
 *                       items:
 *                         type: object
 *                     workspaces:
 *                       type: array
 *                       items:
 *                         type: object
 *       400:
 *         description: Bad request - Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Full name must be more than 1 character, valid email required, and password must be at least 8 characters."
 *       403:
 *         description: User is already registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email is already registered!
 */
router.post("/signup", userController.signup);


router.post("/logout", verifyUser, userController.logout);
router.get("/", verifyUser, userController.getUser);
router.get("/verify-email", verifyUser, userController.verifyEmail);
router.post(
  "/resend-verification-code",
  verifyUser,
  userController.resendVerificationCode
);

module.exports = router;
