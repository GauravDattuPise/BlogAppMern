const { registerController, loginController } = require("../controllers/userController");

const express = require("express");
const router = express.Router();

// USER REGISTRATION
router.post("/registerUser", registerController);

// USER LOGIN
router.post("/loginUser", loginController);

module.exports = router