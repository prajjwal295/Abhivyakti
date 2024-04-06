const express = require("express");

const router = express.Router();

const { login, signup, sendOTP } = require("../controllers/Auth");

const {
  getProfile,
  updateProfile,
  getProfileById,
} = require("../controllers/Profile");

const { auth } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendOTP);
router.get("/getProfile", auth, getProfile);
router.post("/getProfileById",getProfileById);
router.post("/updateProfile", updateProfile);

module.exports = router;
