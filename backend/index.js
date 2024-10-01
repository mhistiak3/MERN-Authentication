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

// app object
const app = express();

// *  Application Routes

// 404 
app.use("*", (req, res) => {
  res.status(404).json({
    message:"Page not found."
  });
});

// start server
const PORT = 3000
app.listen(3000, () => {
    connectDB()
  console.log(`Server is running on port http://localhost:${PORT}`);
});
