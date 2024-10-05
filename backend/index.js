/*
 * Title: Mern Auth System
 * Description: Server Setup
 * Author: Istiak Ahammad
 * Date: 1/10/2024
 *
 */

/**
 *  node modules
 **/
import express from "express";
import cors from "cors";
import path from "path";

/**
 * custom modules
 **/
import { connectDB } from "./config/connectDB.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import { CLIENT_URL } from "./config/index.js";

// app object
const app = express();
const __dirname = path.resolve();

// application level middleware
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// *  Application Routes
app.use("/api/auth", authRouter);

// serve static files

if (process.env.NODE_ENV.trim() === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
