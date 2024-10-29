// models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    RoomID: {
        type: String,
        required: true,
    },
    Guest: {
        type: String,
        required: true,
    },
    Date: {
        type: String, 
        required: true,
    },
    BookedFrom: {
        type: String,
        required: true,
    },
    BookedTill: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
