import { Router } from 'express';
import { ipLimiter } from '../middleware/rateLimiting.js';
let router = Router();

router.get('/', ipLimiter, (req, res) => {
    res.json({hello: "world"})
})

export default router;