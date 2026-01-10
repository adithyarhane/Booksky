import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import sendEmail from "../config/nodemailer.js";
import generateOtp from "../utils/generateOtp.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({
      success: false,
      message: "Missing details.",
    });
  }

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    generateTokenAndSetCookie(res, user._id);

    // Send welcome email
    const subject = "Welcome to Biblious ✨";
    const message = `✨ Welcome to Biblious Website. Your account has been created with id: ${email}`;

    sendEmail(email, subject, message);

    return res.status(200).json({
      success: true,
      user: { user },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "email and password required.",
    });
  }

  try {
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Password.",
      });
    }

    generateTokenAndSetCookie(res, user._id);

    return res.json({
      success: true,
      user: { user },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const sendVerificationOtp = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await userModel.findOne({ _id: userId });

    if (user.isAccountVerified) {
      return res.json({
        success: false,
        message: "Account already verified.",
      });
    }

    const otp = generateOtp();
    user.verificationOtp = otp;
    user.verificationOtpExpireAt = Date.now() + 1 * 60 * 60 * 1000;

    await user.save();

    const email = user.email;
    const subject = "🗝️ Account Verification OTP";
    const message = `Your OTP is ${otp}. Verify your account using this OTP.`;

    sendEmail(email, subject, message);

    return res.status(200).json({
      success: true,
      message: "Verification OTP sent on your email.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyAccount = async (req, res) => {
  const userId = req.user.id;
  const { otp } = req.body;
  try {
    const user = await userModel.findOne({ _id: userId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "🔍 User not found.",
      });
    }

    if (user.verificationOtp === "" || user.verificationOtp !== otp) {
      return res.status(400).json({
        success: false,
        message: "⚠️ Invalid OTP. Please try again.",
      });
    }

    if (user.verificationOtpExpireAt < Date.now()) {
      return res.status(410).json({
        success: false,
        message: "⚠️ OTP Expired.",
      });
    }

    user.isAccountVerified = true;
    user.verificationOtp = "";
    user.verificationOtpExpireAt = "";

    await user.save();

    return res.status(200).json({
      success: false,
      message: "✅ Email verified successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
