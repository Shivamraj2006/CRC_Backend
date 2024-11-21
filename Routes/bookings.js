import express from 'express';
import { getBookings, createBooking , deleteBooking , statusBooking} from '../Controllers/bookingController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/all',authenticateToken, getBookings);
router.post('/create', createBooking);
router.delete('/delete/:id',authenticateToken, deleteBooking);
router.patch('/:id/status' , statusBooking);

export default router;
