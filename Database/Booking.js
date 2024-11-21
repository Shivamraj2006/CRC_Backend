// models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    RoomName: {
        type: String,
        required: true,
    },

    OrganiserName: {
        type: String,
        required: true,
    },
    
    EventName: {
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
        default: "booked",
    },
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
