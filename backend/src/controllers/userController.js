require("dotenv").config();
const userModel = require("../models/userModel");
const verificationCodeModel = require("../models/verificationCodeModel");
const { hashPassword, comparePassword } = require("../utils/password");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const { delay } = require("../utils/utils");
const { body, validationResult } = require("express-validator");
const getUserInitialData = require("../utils/utils").getUserInitialData;
const generateAndSendVerificationCode =
  require("../utils/utils").generateAndSendVerificationCode;

const login = async (req, res, next) => {
  try {
    // await delay(1000);
    const { email, password } = req.body;

    const userDocument = await userModel.findOne({ email }).lean();

    if (!userDocument) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isPasswordCorrect = await comparePassword(
      password,
      userDocument.passwordHash
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const accessToken = generateAccessToken(userDocument);
    const refreshToken = generateRefreshToken(userDocument);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    const [workspacesWithSpaces, workspaceInvitations] =
      await getUserInitialData(userDocument);

    return res.status(200).json({
      accessToken,
      user: {
        fullName: userDocument.fullName,
        email: userDocument.email,
        _id: userDocument._id,
        isVerified: userDocument.isVerified,
        workspaceInvitations,
        workspaces: workspacesWithSpaces,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const logout = async function (req, res, next) {
  try {
    // await delay(1000);
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return next(error);
  }
};

const getUser = async function (req, res, next) {
  try {
    // await delay(1000);

    const { _id } = req.user;
    const userDocument = await userModel.findById(_id);

    if (!userDocument) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const [workspacesWithSpaces, workspaceInvitations] =
      await getUserInitialData(userDocument);

    return res.status(200).json({
      fullName: userDocument.fullName,
      email: userDocument.email,
      _id: userDocument._id,
      isVerified: userDocument.isVerified,
      workspaceInvitations,
      workspaces: workspacesWithSpaces,
    });
  } catch (error) {
    next(error);
  }
};

const signup = [
  body("fullName")
    .isLength({ min: 1 })
    .withMessage("Full name name must be more than 1 characters long."),
  body("email").isEmail().withMessage("Email must be valid."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
      }

      const { fullName, email, password } = req.body;

      const existedEmail = await userModel.findOne({ email });

      if (existedEmail) {
        return res.status(403).json({
          message: "Email is already registered!",
        });
      }

      const passwordHash = await hashPassword(password);

      const userDocument = new userModel({
        fullName,
        email,
        passwordHash,
      });

      await userDocument.save();

      const accessToken = generateAccessToken(userDocument);
      const refreshToken = generateRefreshToken(userDocument);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      });

      await generateAndSendVerificationCode(userDocument);

      const [workspacesWithSpaces, workspaceInvitations] =
        await getUserInitialData(userDocument);

      return res.status(200).json({
        message: "Registered successfully",
        accessToken,
        user: {
          fullName: userDocument.fullName,
          email: userDocument.email,
          _id: userDocument._id,
          isVerified: userDocument.isVerified,
          workspaceInvitations,
          workspaces: workspacesWithSpaces,
        },
      });
    } catch (error) {
      return next(error);
    }
  },
];

const verifyEmail = async (req, res) => {
  try {
    const { verificationCode } = req.query;

    const verificationCodeDocument = await verificationCodeModel.findOne({
      verificationCode,
      expiresAt: { $gt: Date.now() },
    });

    if (!verificationCodeDocument) {
      return res
        .status(400)
        .json({ message: "Verification code is invalid or has expired." });
    }

    const userDocument = await userModel.findById(
      verificationCodeDocument.userId
    );

    if (!userDocument) {
      return res.status(400).json({ message: "User not found" });
    }

    if (userDocument.isVerified) {
      return res.status(400).json({ message: "User is already verified" });
    }

    userDocument.isVerified = true;

    await Promise.all([
      userDocument.save(),
      verificationCodeModel.deleteMany({ userId: userDocument._id }),
    ]);

    return res.status(200).json({
      message: "Email verified successfully!",
    });
  } catch (error) {
    return next(error);
  }
};

const resendVerificationCode = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userDocument = await userModel.findOne({ email });
    if (!userDocument) {
      return res.status(404).json({ message: "User not found" });
    }

    if (userDocument.isVerified) {
      return res.status(400).json({ message: "User is already verified" });
    }

    const { canResend, timeRemaining } = await checkCooldownPeriod(
      userDocument._id
    );

    if (!canResend) {
      return res
        .status(400)
        .json({ message: `Wait ${timeRemaining} before asking to resend` });
    }

    await generateAndSendVerificationCode(userDocument);

    return res
      .status(200)
      .json({ message: "Verification code has been resent" });
  } catch (error) {
    next(error);
  }
};

const checkCooldownPeriod = async (userId) => {
  try {
    const recentVerificationCode = await verificationCodeModel
      .findOne({ userId })
      .sort({ createdAt: -1 });

    if (!recentVerificationCode) {
      return { canResend: true };
    }

    const now = new Date();
    const createdAt = recentVerificationCode.createdAt;

    const timeDifferenceInSeconds = (now - createdAt) / 1000;

    if (timeDifferenceInSeconds < 60) {
      const timeRemaining = Math.floor(60 - timeDifferenceInSeconds);
      return { canResend: false, timeRemaining };
    }

    return { canResend: true };
  } catch (error) {
    console.error("Error checking cooldown period:", error);
    throw error;
  }
};

module.exports = {
  login,
  getUser,
  signup,
  verifyEmail,
  resendVerificationCode,
  logout,
  getUserInitialData,
};
