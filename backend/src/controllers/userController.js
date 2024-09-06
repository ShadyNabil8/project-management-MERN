const { CustomError } = require("../middlewares/errorHandler");
const userModel = require("../models/userModel");
const workspaceModel = require("../models/workspaceModel");
const { hashPassword, comparePassword } = require("../utils/password");
const { generateToken } = require("../utils/token");
const { delay } = require("../utils/utils");

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

    const token = generateToken(userDocument._id);

    // Sanitize the user document to remove sensitive fields

    return res.status(200).json({
      token,
      user: userDocument,
    });
  } catch (error) {
    return next(error);
  }
};

const getUser = async function (req, res, next) {
  try {
    await delay(1000);

    const { userId } = req.user;
    const userDocument = await userModel.findById(userId);

    if (!userDocument) {
      throw new CustomError("User not found", 404);
    }

    return res.status(200).json(userDocument);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, getUser };
