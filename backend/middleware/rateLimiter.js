// yaha per ek arrowfunction ratelimiter k naam se banarey
import ratelimit from "../config/upstash.js";
const rateLimiter = async (req, res, next) => {
  try {
    // agar succes hua toh
    const { success } = await ratelimit.limit("my-self key");
    console.log("success", success);
    if (!success) {
      return res.status(429).json({ msg: "too many request" });
    }
    // agar success hua toh application runs function  implement hota
    next();
  } catch (error) {
    console.log("error in rateLimiter middleware", error);
    next(error);
  }
};

export default rateLimiter;
