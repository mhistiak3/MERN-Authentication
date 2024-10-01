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
import { connectDB } from "./config/connectDB.js";
import authRouter from "./routes/auth.routes.js";

// app object
const app = express();

// *  Application Routes
app.use("/api/auth", authRouter);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
