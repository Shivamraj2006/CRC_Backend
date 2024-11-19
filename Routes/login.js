import express from 'express';
import { registerUser, loginuser } from '../Controllers/authController.js';


const router = express.Router();


router.post('/register',registerUser);
router.post('/delete/:id',loginuser);

export default router;