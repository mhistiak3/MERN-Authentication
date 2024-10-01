/*
 * Title: JSON Web Token
 * Description:  Generate JSON WEB TOKEN and set cookie
 * Author: Istiak Ahammad
 * Date: 2/10/2024
 *
 */

/**
 * node modules
 **/
import jwt from "jsonwebtoken";

/**
 * custom modules
 **/
import { JWT_SECRET } from "../config/index.js";

const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days,
  });

  return token;
};
export default generateTokenAndSetCookie;