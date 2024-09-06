const { verifyToken } = require("../utils/token");
const { CustomError } = require("./errorHandler");

const verifyUser = function (req, res, next) {
  try {
    if (!req.headers.authorization) {
      throw new CustomError("No token provided", 400);
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = verifyToken(token);
    req.user = decoded;
    return next();
  } catch (error) {
    throw new CustomError("Invalid token", 401);
  }
};

module.exports = verifyUser;
