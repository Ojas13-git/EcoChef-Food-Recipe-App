const express = require("express");
const { signup, login, logout, checkUser } = require("./controllers/authController");
const { verifyToken } = require("./middlewares/verifyToken");
const {
    addToFavourites,
    removeFromFavourites,
    getFavourties,
  } = require("./controllers/featureController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/checkUser",verifyToken, checkUser);
router.post("/addToFavourites/:id", addToFavourites);
router.post("/removeFromFavourites/:id", removeFromFavourites);
router.get("/getFavourites/:id", getFavourties);

module.exports = router;