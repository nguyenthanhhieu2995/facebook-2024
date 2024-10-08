import dotenv from "dotenv";
dotenv.config();

export const WEB_URL = process.env.WEB_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const ACCESS_TOKEN_EXPIRE_IN = 60 * 60 * 24;
export const MAIL_FROM = process.env.MAIL_FROM;
export const MAIL_TRANSPORT = process.env.MAIL_TRANSPORT;

