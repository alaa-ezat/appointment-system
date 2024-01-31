import React, { useState } from 'react';
import './appiontmentform.css';

const AppointmentForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };



const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com)$/i;
  return emailRegex.test(email);
};



const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^[0-9]{8,15}$/;
  return phoneRegex.test(phoneNumber);
};



  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
      return;
    }
  // Validate phone number
  if (!validatePhoneNumber(formData.phoneNumber)) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      phoneNumber: 'Invalid phone number format ',
    }));
    return;
  }


    onFormSubmit(formData);
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
