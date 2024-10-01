import mongoose from "mongoose";
import { MONGO_URI } from "./index.js";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("Error connection to DB:", error.message);
    process.exit(1);
  }
};
