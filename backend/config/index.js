import dotenv from "dotenv";
dotenv.config();
export const { MONGO_URI, JWT_SECRET, EMAIL_PASS, EMAIL_USER, CLIENT_URL } =
  process.env;
