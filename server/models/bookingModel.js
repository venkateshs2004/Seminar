import { connectDB } from '../config/db.js';

export const createNewBooking = async (userId, hallId, date, timeSlot) => {
  const connection = await connectDB();
  const query = `INSERT INTO bookings (user_id, hall_id, date, time_slot) VALUES (?, ?, ?, ?)`;
  const [result] = await connection.execute(query, [userId, hallId, date, timeSlot]);
  return result;
};

export const fetchAllBookings = async () => {
  const connection = await connectDB();
  const query = 'SELECT * FROM bookings';
  const [rows] = await connection.execute(query);
  return rows;
};

export const deleteBooking = async (id) => {
  const connection = await connectDB();
  const query = 'DELETE FROM bookings WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};
