require("dotenv").config();
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_secret";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "refresh_secret";

const ACCESS_TOKEN_EXPIRATION = "15m";
const REFRESH_TOKEN_EXPIRATION = "7d";

const generateAccessToken = (user) => {
  return jwt.sign({ _id: user._id }, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRATION,
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ _id: user._id }, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRATION,
  });
};

const verifyToken = function (refreshToken, secretKey, cb) {
  jwt.verify(refreshToken, secretKey, cb);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET,
};

// module.exports = { generateToken, verifyToken };
