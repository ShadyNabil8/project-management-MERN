require("dotenv").config();
const { CustomError } = require("../middlewares/errorHandler");
const userModel = require("../models/userModel");
const workspaceModel = require("../models/workspaceModel");
const { hashPassword, comparePassword } = require("../utils/password");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const { delay } = require("../utils/utils");
const { serialize } = require("cookie");

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

    return res.status(200).json(userDocument);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, getUser };
