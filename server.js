import express from 'express';
import bookingRoutes from './Routes/bookings.js'

const app = express();
const PORT = process.env.Port || 5500;

app.use(express.json()); 

connectDB();

app.use('/api/bookings' , bookingRoutes);

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});
