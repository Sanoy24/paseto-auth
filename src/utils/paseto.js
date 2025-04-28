const crypto = require("crypto");
const { SECRET_KEY } = require("../constant");
const { V3 } = require("paseto");
const fs = require("fs");

const secretKey = Buffer.from(SECRET_KEY, "base64");

const skey = Buffer.from(SECRET_KEY, "utf-8");

async function generateToken(payload) {
  const token = await V3.encrypt(payload, secretKey);
  return token;
}

async function verifyToken(token) {
  console.log(secretKey);

  fs.writeFileSync("./index.json", skey);

  const decryptedData = await V3.decrypt(token, secretKey);
  return decryptedData;
}

module.exports = {
  generateToken,
  verifyToken,
};
