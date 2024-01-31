import React, { useState } from 'react';
import './dataselection.css';

const DateSelection = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 

    // Check if the selected date is today or in the past
    if (new Date(selectedDate) <= currentDate) {
      alert('Please select a future date.');
      return;
    }

    setSelectedDate(selectedDate);
    onDateSelect(selectedDate);
  };

  return (
    <div className="date-selection-container">
      <h2>Select Date for Appointment</h2>
      <label>
        Select Date:
        <input type="date" value={selectedDate} onChange={handleDateChange} className="date-selection-input" />
      </label>
    </div>
  );
};

export default DateSelection;
