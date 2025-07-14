// yaha per ratelimiting implement karey is file mien

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

// function call karey "dotenv.config()";
dotenv.config();
// yaha per "ratelimit" object banarey
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"), // 100 requests per 60 seconds
});

export default ratelimit;
