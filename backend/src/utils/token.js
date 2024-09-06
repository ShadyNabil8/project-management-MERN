require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = function (userId) {
  if (!userId) {
    throw new Error("Error in generation token");
  }
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  return token;
};

const verifyToken = function (token) {
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  return decoded;
};

module.exports = { generateToken, verifyToken };
