const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const isUserRegistered = await userModel.findOne({
    $or: [
      {
        username,
      },
      {
        email,
      },
    ],
  });

  if (isUserRegistered) {
    return res.status(400).json({
      messaeg: "user with same email and username already exits",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      username: user.username,
      email: user.email,
    },
  });
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel
    .findOne({
      $or: [{ username }, { email }],
    })
    .select("+password");

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Inavlid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );
  res.cookie("token", token);

  return res.status(200).json({
    message: "user logged in successfully",
    user: {
      user: user.username,
      email: user.email,
    },
  });
};

const getUserData = async (req, res) => {
  const userId = req.user.id;

  const user = await userModel.findById(userId);

  return res.status(200).json({
    message: "user fetched successfully",
    user,
  });
};

const logoutUser = async (req, res) => {
  const token = req.cookies.token;

  res.clearCookie(token);

  /* 
  - usually tokens are saved in redis because its throughput in more
  */
  await blacklistModel.create({
    token,
  });

  res.status(200).json({
    message: "user logout successfully",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserData,
  logoutUser,
};
