import { Router } from 'express';
import { ipLimiter } from '../middleware/rateLimiting.js';
import metaRoute from './metaRoute.js';
let router = Router();

router.get('/', ipLimiter, (req, res) => {
    res.json({hello: "world"})
})

router.get('/meta', ipLimiter, metaRoute);

export default router;