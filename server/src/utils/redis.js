import { config as dotenvConfig } from 'dotenv';
import { Redis } from 'ioredis';
dotenvConfig({ path: `.env.${process.env.DEPLOYMENT_ENVIRONMENT}` });

let redis = undefined;

if (process.env.REDIS_HOST && process.env.REDIS_PORT) {
    console.log("[redis.js] [INFO] Configuring Redis Client")
    redis = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);
}

export default redis;