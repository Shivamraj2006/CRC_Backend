import express from 'express';
import connectDB from './Database/connectDB.js';
import bookingRoutes from './Routes/bookings.js';

const app = express();
const PORT = process.env.PORT || 5500; 

app.use(express.json()); 

connectDB();

app.use('/booking', bookingRoutes); 

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
