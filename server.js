import express from 'express';
import bookings from './Routes/bookings.js'

const app = express();
const PORT = process.env.Port || 5500;

app.use('/bookings' , bookings);

app.get('/',(req,res) => {
    res.send(`Hello World!`);
});

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});
