import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from "@/lib/constants";
import Redis from "ioredis";

export const redisService = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
});
