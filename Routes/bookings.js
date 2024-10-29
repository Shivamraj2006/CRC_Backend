import express from 'express'
import {createBooking,getBookings,deleteBookings} from '../Controllers/bookingController'

const router = express.Router();

router.get('/all',getBookings);
router.post('/create',createBooking);
router.delete('/delete', deleteBookings);

export default router;