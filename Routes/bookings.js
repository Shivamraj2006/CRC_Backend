import express from 'express'
import {createBooking,getBookings,deleteBooking} from '../Controllers/bookingController'

const router = express.Router();

router.get('/get',getBookings);
router.post('/create',createBooking);
router.delete('/delete', deleteBooking);

export default router;