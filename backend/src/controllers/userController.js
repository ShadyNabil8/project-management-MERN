require("dotenv").config();
const { CustomError } = require("../middlewares/errorHandler");
const userModel = require("../models/userModel");
const workspaceModel = require("../models/workspaceModel");
const verificationCodeModel = require("../models/verificationCodeModel");
const { hashPassword, comparePassword } = require("../utils/password");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const { delay } = require("../utils/utils");
const { body, validationResult } = require("express-validator");
const { sendVerificationCode } = require("../utils/email");
const crypto = require("crypto");

const findUser = async function (query) {
  return await userModel.findOne(query);
};

const login = async function (req, res, next) {
  try {
    await delay(1000);

    const { email, password } = req.body;

    const userDocument = await findUser({ email });

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

    return res.status(200).json({
      accessToken,
      user: {
        fullName: userDocument.fullName,
        email: userDocument.email,
        id: userDocument._id,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const getUser = async function (req, res, next) {
  try {
    await delay(1000);

    const { _id } = req.user;
    const userDocument = await userModel.findById(_id);

    if (!userDocument) {
      throw new CustomError("User not found", 404);
    }

    return res.status(200).json({
      fullName: userDocument.fullName,
      email: userDocument.email,
      _id: userDocument._id,
      isVerified: userDocument.isVerified,
    });
  } catch (error) {
    next(error);
  }
};

const searchUser = async function (req, res, next) {
  try {
    // await delay(500);

    const { email } = req.query;

    const userDocument = await userModel.findOne({ email });

    if (!userDocument) {
      throw new CustomError("User not found", 404);
    }

    return res.status(200).json(userDocument.email);
  } catch (error) {
    return next(error);
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

      const verificationCode = crypto.randomBytes(3).toString("hex");
      const verificationExpires = Date.now() + 3600000; // 1 Hour

      const verificationRecord = new verificationCodeModel({
        userId: userDocument._id,
        verificationCode: verificationCode,
        expiresAt: verificationExpires,
      });

      await verificationRecord.save();

      await sendVerificationCode(userDocument.email, verificationCode);

      return res.status(200).json({
        message: "Registered successfully",
        accessToken,
        user: {
          fullName: userDocument.fullName,
          email: userDocument.email,
          _id: userDocument._id,
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

    await userDocument.save();

    await verificationCodeModel.deleteMany({ userId: userDocument._id });

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

    await verificationCodeModel.deleteMany({ userId: userDocument._id });

    const verificationCode = crypto.randomBytes(3).toString("hex");
    const verificationExpires = Date.now() + 3600000; // 1 Hour

    const verificationRecord = new verificationCodeModel({
      userId: userDocument._id,
      verificationCode: verificationCode,
      expiresAt: verificationExpires,
    });

    await verificationRecord.save();

    await sendVerificationCode(userDocument.email, verificationCode);

    return res
      .status(200)
      .json({ message: "Verification code has been resent" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  getUser,
  searchUser,
  signup,
  verifyEmail,
  resendVerificationCode,
};
