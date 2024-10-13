import dotenv from "dotenv";
dotenv.config();

export const WEB_URL = process.env.WEB_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const ACCESS_TOKEN_EXPIRE_IN = 60 * 60 * 2;
export const REFRESH_TOKEN_EXPIRE_IN = 60 * 60 * 24 * 10;
export const MAIL_FROM = process.env.MAIL_FROM;
export const MAIL_TRANSPORT = process.env.MAIL_TRANSPORT;
export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PORT = parseInt(process.env.REDIS_PORT);
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
