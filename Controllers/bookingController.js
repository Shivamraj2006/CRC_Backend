import Booking from '../Database/Booking.js';

export const getBookings = async (req, res) => {
    const roomName = req.query.roomName;
    const date = req.query.date || new Date().toISOString().split('T')[0];

    console.log(`${roomName} and ${date}`);//debug
    console.time('getBookings');//debug

    try {
        const bookings = await Booking.find({ RoomName: roomName, Date: date });

        console.timeEnd('getBookings'); //debug

        if (bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found' });
        }

        bookings.sort((a, b) => a.BookedFrom.localeCompare(b.BookedFrom));

        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const createBooking = async (req, res) => {
    const { RoomName, Guest, Date, BookedFrom, BookedTill, Status } = req.body;

    const newBooking = new Booking({
        RoomName,
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
    const { id } = req.params; 

    try {
        const deletedBooking = await Booking.findByIdAndDelete(id);

        if (!deletedBooking) {
            return res.status(404).json({ message: `Booking with ID ${id} not found` });
        }

        res.json({ message: `Booking with ID ${id} deleted successfully`, deletedBooking });
    } catch (error) {
        console.error(`Error deleting booking with ID ${id}:`, error);
        res.status(500).json({ message: 'Server error' });
    }
};
