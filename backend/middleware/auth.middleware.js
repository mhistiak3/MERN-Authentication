import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

const AuthMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - No token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Invalid token",
      });
    }
    req.userId = decoded.userId;
    next()
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({
      success: false,
      message:error.message
    })
    
  }
};
export default AuthMiddleware