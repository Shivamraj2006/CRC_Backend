import express from 'express';
import { getBookings, createBooking , deleteBooking } from '../Controllers/bookingController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/all',authenticateToken, getBookings);
router.post('/create',authenticateToken, createBooking);
router.delete('/delete/:id',authenticateToken, deleteBooking);

export default router;
