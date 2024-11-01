import express from 'express';
import { getBookings, createBooking , deleteBooking } from '../Controllers/bookingController.js';

const router = express.Router();

router.get('/all', getBookings);
router.post('/create', createBooking);
router.delete('/delete/:id', deleteBooking);

export default router;
