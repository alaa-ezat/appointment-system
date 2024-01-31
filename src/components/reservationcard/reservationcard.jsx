import React from 'react';
import './reservationcard.css';

const formatDate = (date) => {
  return date.toString();
};

const ReservationCard = ({ doctor, date, consultationMethod, appointmentDetails }) => {
  console.log('Rendering ReservationCard with:', doctor, date, consultationMethod, appointmentDetails);

  return (
    <div className="reservation-card">
      <h2>Reservation Details</h2>
      <p><strong>Doctor:</strong> {doctor}</p>
      <p><strong>Date:</strong> {date instanceof Date ? formatDate(date) : date}</p>
      <p><strong>Consultation Method:</strong> {consultationMethod}</p>

      {appointmentDetails ? (
        <>
          <p><strong>Full Name:</strong> {appointmentDetails.fullName}</p>
          <p><strong>Email:</strong> {appointmentDetails.email}</p>
          <p><strong>Phone Number:</strong> {appointmentDetails.phoneNumber}</p>
        </>
      ) : null}

      <p>Your appointment is confirmed! Thank you for choosing our service.</p>
    </div>
  );
};

export default ReservationCard;