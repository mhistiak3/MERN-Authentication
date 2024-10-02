/*
 * Title: Authentication Routes
 * Description: Setup Authentication Routes
 * Author: Istiak Ahammad
 * Date: 2/10/2024
 *
 */

/**
 *  node modules
 **/
import express from "express";

/**
 *  app modules
**/
import { loginController, logoutController, registerController, verifyEmailController } from "../controllers/auth.controllers.js";

// router
const router = express.Router();


// Register Route
router.post("/register", registerController);

// Login Route
router.post("/login",loginController);

// Logout Route
router.post("/logout",logoutController);

// verify email
router.post("/verify-email", verifyEmailController);


export default router
