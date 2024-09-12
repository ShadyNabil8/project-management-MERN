const {
  generateAccessToken,
  verifyToken,
  REFRESH_TOKEN_SECRET,
} = require("../utils/token");

const refreshToken = (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
    }

    verifyToken(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Invalid refresh token" });
      }

      // Generate a new access token
      const newAccessToken = generateAccessToken(user);

      return res.json({
        accessToken: newAccessToken,
      });
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { refreshToken };
