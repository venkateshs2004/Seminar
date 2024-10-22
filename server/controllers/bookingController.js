import connectDB from '../config/db.js';

// Create a booking (User)
export const createBooking = async (req, res) => {
  const { hallId, date, timeSlot } = req.body;

  const query = 'INSERT INTO bookings (hall_id, date, time_slot, status) VALUES (?, ?, ?, ?)';
  const values = [hallId, date, timeSlot, 'pending'];  // Status is 'pending' initially

  try {
    const connection = await connectDB();
    await connection.execute(query, values);
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Fetch all bookings (Admin)
export const getAllBookings = async (req, res) => {
  const query = 'SELECT * FROM bookings';

  try {
    const connection = await connectDB();
    const [rows] = await connection.execute(query);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

// Approve a booking (Admin)
export const approveBooking = async (req, res) => {
  const { id } = req.params;

  const query = 'UPDATE bookings SET status = ? WHERE id = ?';
  const values = ['approved', id];

  try {
    const connection = await connectDB();
    await connection.execute(query, values);
    res.status(200).json({ message: 'Booking approved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving booking', error });
  }
};

// Reject a booking (Admin)
export const rejectBooking = async (req, res) => {
  const { id } = req.params;

  const query = 'UPDATE bookings SET status = ? WHERE id = ?';
  const values = ['rejected', id];

  try {
    const connection = await connectDB();
    await connection.execute(query, values);
    res.status(200).json({ message: 'Booking rejected successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting booking', error });
  }
};

// Fetch user's bookings (User)
export const getUserBookings = async (req, res) => {
  const { userId } = req.body;  // Assuming you're tracking users by userId

  const query = 'SELECT * FROM bookings WHERE user_id = ?';

  try {
    const connection = await connectDB();
    const [rows] = await connection.execute(query, [userId]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user bookings', error });
  }
};
