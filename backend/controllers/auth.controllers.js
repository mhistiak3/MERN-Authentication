/*
 * Title: Authentication Controller
 * Description:  Authentication Controller
 * Author: Istiak Ahammad
 * Date: 2/10/2024
 *
 */

/**
 * node modules
 **/
import bcrypt from "bcryptjs";

/**
 *  app modules
 **/
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import EmailSend from "../utils/sendEmail.js";

// Register Controller
export const registerController = async (req, res) => {
  try {
    // destructer request body
    const { email, name, password } = req.body;

    // request body validation
    if (!email || !name || !password) {
      throw new Error("All fields are required");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user with verification token
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = await User.create({
      email,
      name,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpireAt: Date.now() + 3600000, // 1 hour,
    });

    //  generate token and set cookie
    generateTokenAndSetCookie(res, user._id);

    // Send verification email
    await EmailSend(email, "Verify Email", verificationToken);
    res.status(201).json({
      success: true,
      message:
        "User created successfully and sent email to: " +
        email +
        " for verification.",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Verify Email Controller
export const verifyEmailController = async (req, res) => {
  try {
    // get code and find user
    const { code } = req.body;
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpireAt: { $gt: Date.now() },
    });
    if (!user) {
      throw new Error("Invalid or expired verification code");
    }

    // update user
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpireAt = undefined;
    await user.save();

    // send welcome email
    await EmailSend(user.email, "Welcome Email", user.name);

    // response success
    res.json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// Login Controller
export const loginController = async (req, res) => {
  try {
  } catch (error) {}
};

// Logout Controller
export const logoutController = async (req, res) => {
  try {
  } catch (error) {}
};
