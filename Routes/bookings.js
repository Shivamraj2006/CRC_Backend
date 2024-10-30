import express from 'express';
import { getBookings, createBooking , deleteBooking } from '../Controllers/bookingController.js';

const router = express.Router();

router.get('/get', getBookings);
router.post('/create', createBooking);
router.delete('/delete', deleteBooking);

export default router;
