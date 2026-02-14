import express from 'express';
import { currentUser, loginUser, registerUser } from '../controllers/user.controllers.js';
import { validateToken } from '../middleware/validateToken.middelware.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateToken, currentUser);

export default router