import Booking from '../Database/Booking.js';

export const getBookings = async (req, res) => {
    const roomId = req.query.roomId;
    const date = req.query.date || new Date().toISOString().split('T')[0];

    console.log(`${roomId} and ${date}`);//debug
    console.time('getBookings');//debug

    try {
        const bookings = await Booking.find({ RoomID: roomId, Date: date });

        console.timeEnd('getBookings'); //debug

        if (bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found' });
        }

        bookings.sort((a, b) => a.BookedFrom.localeCompare(b.BookedFrom));

        res.status(200).json(filteredBookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const createBooking = async (req, res) => {
    const { RoomID, Guest, Date, BookedFrom, BookedTill, Status } = req.body;

    const newBooking = new Booking({
        RoomID,
        Guest,
        Date,
        BookedFrom,
        BookedTill,
        Status,
    });

    try {
        const savedBooking = await newBooking.save(); 
        res.status(201).json(savedBooking); 
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(400).json({ message: 'Error creating booking', error });
    }
};

export const deleteBooking = async (req, res) => {
    const { roomId, date } = req.params;

    try {
        const deletedBooking = await Booking.findOneAndDelete({ RoomID: roomId, Date: date });

        if (!deletedBooking) {
            return res.status(404).json({ message: `Booking for Room ID ${roomId} on ${date} not found` });
        }

        res.json({ message: `Booking for Room ID ${roomId} on ${date} deleted successfully`, deletedBooking });
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
