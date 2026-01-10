import express from "express";
import {
  login,
  resetPassword,
  sendResetOtp,
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
authRouter.route("/send-reset-otp").post(sendResetOtp);
authRouter.route("/reset-password").post(resetPassword);

export default authRouter;
