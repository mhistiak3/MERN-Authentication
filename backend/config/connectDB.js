/*
 * Title: Mern Auth System
 * Description: MongoDB Connection
 * Author: Istiak Ahammad
 * Date: 2/10/2024
 *
 */

import mongoose from "mongoose";
import { MONGO_URI } from "./index.js";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI, {
      dbName: "Auth",
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("Error connection to DB:", error.message);
    process.exit(1);
  }
};
