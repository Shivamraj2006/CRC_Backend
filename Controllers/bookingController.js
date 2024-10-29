const getBookings = (req, res) => {
    const roomId = req.query.roomId;
    const date = req.query.date || new Date().toISOString().split('T')[0];
    const startTime = req.query.startTime;

    const filteredBookings = bookings.filter(booking => 
        booking.roomId == roomId && booking.date === date 
    );

    filteredBookings.sort((a, b) => a.startTime.localeCompare(b.startTime));

    // Respond with filtered and sorted bookings
    res.json(filteredBookings);    
};

const createBooking = (req, res) => {
    const newBooking = {
        id: data.bookings?.length ? data.bookings[data.bookings.length - 1].id + 1 : 1,
        //Add data
    }

    if (!newBooking.data) {
        return res.status(400).json({ 'message': 'Input Data is required.' });
    }

    data.setbookings([...data.bookings, newBooking]);
    res.status(201).json(data.bookings);
}

const deleteBookings = (req, res) => {
    const booking = data.bookings.find(book => book.id === parseInt(req.body.id));
    if (!booking) {
        return res.status(400).json({ "message": `Booking ID ${req.body.id} not found` });
    }
    const filteredArray = data.bookings.filter(book => book.id !== parseInt(req.body.id));
    data.setbookings([...filteredArray]);
    res.json(data.bookings);
}

export default {
    getBookings,
    createBooking,
    deleteBookings
}