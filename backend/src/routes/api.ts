import { Router } from 'express';
import { getHealth, getProfile } from '../controllers/profile.controller.js';

const router = Router();

router.get('/health', getHealth);
router.get('/profile', getProfile);

export default router;
