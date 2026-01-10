import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

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
