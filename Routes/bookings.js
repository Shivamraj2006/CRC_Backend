import express from 'express';
import * as bookingController from '../Controllers/bookingController.js';

const router = express.Router();

const { createBooking, getBookings, deleteBooking } = bookingController;

router.get('/get', getBookings);
router.post('/create', createBooking);
router.delete('/delete', deleteBooking);

export default router;
