const express = require("express");
const userController = require("../controller/user.conteoller");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/verify", userController.verifyToken);
router.get("/healthcheck", userController.healthcheck);

module.exports = router;
