const { verifyToken, ACCESS_TOKEN_SECRET } = require("../utils/token");

const verifyUser = function (req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ message: "Unauthorized, No token provided" });
    }

    const token = req.headers.authorization.split(" ")[1];
    verifyToken(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized, Invalid token" });
      }

      req.user = user; // Attach user data to request object
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyUser;
