const User = require("../model/user.model");
const { generateToken, verifyToken } = require("../utils/paseto");

exports.healthcheck = async (req, res) => {
  res.status(200).json({ message: "up and running" });
};

exports.login = async (req, res) => {
  const payload = req.body;

  const user = await User.findOne({ email: payload.email });
  console.log(user);
  const userPayload = {
    id: user._id,
    email: user.email,
    fullName: user.fullName,
  };
  const token = await generateToken(userPayload);
  res.status(200).json({ token });
};

exports.verifyToken = async (req, res) => {
  const data = req.body;

  const decryptedPayload = await verifyToken(data.data);
  res.status(200).json({ decryptedPayload });
};

exports.register = async (req, res) => {
  const payload = req.body;
  console.log(payload);
  const newUser = await User.create(payload);
  res.status(200).json({ response: newUser });
};
