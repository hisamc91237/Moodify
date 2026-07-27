const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(404).json({
      message: "token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
};

module.exports = { authUser };
