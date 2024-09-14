const userModel = require("../models/userModel");
const {
  generateAccessToken,
  verifyToken,
  REFRESH_TOKEN_SECRET,
} = require("../utils/token");

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
    }

    verifyToken(refreshToken, REFRESH_TOKEN_SECRET, async (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Invalid refresh token" });
      }

      // Generate a new access token
      const newAccessToken = generateAccessToken(user);

      const userDocument = await userModel.findById(user._id);

      if (!userDocument) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json({
        accessToken: newAccessToken,
        user: {
          _id: userDocument._id,
          email: userDocument.email,
          fullName: userDocument.fullName,
        },
      });
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { refreshToken };
