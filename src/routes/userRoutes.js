const express = require("express");
const router = express.Router();

const { registerController, loginController } = require("../controllers/userController");

// USER REGISTRATION
router.post("/registerUser", registerController);

// USER LOGIN
router.post("/loginUser", loginController);

module.exports = router