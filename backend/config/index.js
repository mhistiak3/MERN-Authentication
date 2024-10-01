import dotenv from "dotenv";
dotenv.config();
export const { MONGO_URI, JWT_SECRET } = process.env;
