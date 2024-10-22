import express from 'express';
import {
  createBooking,
  getAllBookings,
  approveBooking,
  rejectBooking,
  getUserBookings,
} from '../controllers/bookingController.js';

const router = express.Router();

// User routes
router.post('/bookings/create', createBooking);        // User creates a booking
router.get('/bookings/user', getUserBookings);         // User fetches their bookings

// Admin routes
router.get('/bookings', getAllBookings);               // Admin fetches all bookings
router.post('/bookings/:id/approve', approveBooking);  // Admin approves a booking
router.post('/bookings/:id/reject', rejectBooking);    // Admin rejects a booking

export default router;
