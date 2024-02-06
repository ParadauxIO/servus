import { RateLimiterRedis } from 'rate-limiter-flexible';
import redis from "../utils/redis.js"

let ipRateLimiter = null;

// Only connect to redis if in production.
if (redis) {
    console.log("[rateLimiting.js] Valid redis")
    ipRateLimiter = new RateLimiterRedis({
        storeClient: redis,
        keyPrefix: 'abairapi_iplimiter_',
        points: 10, // 10 requests
        duration: 1, // per 1 second by IP
    })
}

const ipLimiter = (req, res, next) => {
    // Disable IP Rate Limiting if a client is not present
    if (!redis || !ipRateLimiter) {
        console.log("[rateLimiting.js] [WARN] Bypassing rate limit for: " + req.ip)
        next();
        return;
    }

    ipRateLimiter.consume(req.ip)
        .then(async (rlRes) => {
            res.set("X-RateLimit-Limit", ipRateLimiter.points);
            res.set("X-RateLimit-Remaining", rlRes.remainingPoints)
            res.set("X-RateLimit-Reset", new Date(Date.now() + rlRes.msBeforeNext))
            next();

        })
        .catch((err) => {
            res.set("X-RateLimit-Limit", ipRateLimiter.points);
            res.set("X-RateLimit-Reset", new Date(Date.now() + err.msBeforeNext))
            res.status(429).send('Too Many Requests');
        });
};

export { ipLimiter }