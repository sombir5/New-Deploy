const express = require("express");
const User = require("../modal/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.send({ status: false, message: "User alresdy exists" });
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  return res.send({ status: 200, message: "Registered successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.send({ status: false, message: "Wrong credentials" });
  }
  const userID = user._id;
  const Token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    "Secret",
    { expiresIn: "5 days" }
  );
  return res.send({ userID, Token, message: "Login successfully" });
});

module.exports = router;
