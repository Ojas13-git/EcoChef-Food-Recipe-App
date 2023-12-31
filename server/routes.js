const express = require("express");
const { signup, login, logout, checkUser } = require("./controllers/authController");
const { verifyToken } = require("./middlewares/verifyToken");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/checkUser",verifyToken, checkUser);

module.exports = router;