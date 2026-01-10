import express from "express";
import {
  login,
  sendVerificationOtp,
  signup,
  verifyAccount,
} from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

authRouter.route("/signup").post(signup);
authRouter.route("/login").post(login);
authRouter.route("/send-verification-otp").post(userAuth, sendVerificationOtp);
authRouter.route("/verify-account").post(userAuth, verifyAccount);

export default authRouter;
