import React, { useState, useEffect } from 'react';
import AppointmentForm from '../appointmentform/appiontmentform';
import DoctorSelection from '../doctorselection/doctorselection';
import DateSelection from '../dataselection/dataselection';
import ReservationCard from '../reservationcard/reservationcard';
import './dashboard.css';

const Dashboard = () => {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [consultationMethod, setConsultationMethod] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('appointmentData'));
    if (savedData) {
      setSelectedDoctor(savedData.selectedDoctor);
      setSelectedDate(savedData.selectedDate);
      setConsultationMethod(savedData.consultationMethod);
      setStep(savedData.step);
      setAppointmentDetails(savedData.appointmentDetails);
    }
  }, []);

  useEffect(() => {
    const appointmentData = {
      selectedDoctor,
      selectedDate,
      consultationMethod,
      step,
      appointmentDetails, 
    };
    localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
    console.log('Saved to local storage:', appointmentData);
  }, [selectedDoctor, selectedDate, consultationMethod, step, appointmentDetails]);

  const handleToggleView = () => {
    setStep((prevStep) => {
      if (prevStep === 4) {
        return 5;
      } else {
        return prevStep === 1 ? 2 : (prevStep === 2 ? 3 : 4);
      }
    });
  };

  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleDateSelection = () => {
    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setSelectedDate(nextDay);
  };

  const handleConsultationMethod = (method) => {
    setConsultationMethod(method);
  };

  const handleAppointmentFormSubmit = (formData) => {
    setAppointmentDetails(formData);
    handleToggleView();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {step === 1 && (
          <>
           <AppointmentForm onFormSubmit={handleAppointmentFormSubmit} />
          </>
        )}
        {step === 2 && (
          <>
            <DoctorSelection onDoctorSelect={handleDoctorSelection} />
           
          </>
        )}
        <div className={`dashboard-content${step === 4 ? ' step-4' : ''}${step === 5 ? ' step-5' : ''}`}></div>
        {step === 3 && (
          <>
            <DateSelection onDateSelect={handleDateSelection} />
            
          </>
        )}
        {step === 4 && (
          <>
            <h3>Consultation Method</h3>
            <div className="checkbox-label">
              <input
                type="radio"
                id="atFacility"
                value="At Facility"
                checked={consultationMethod === 'At Facility'}
                onChange={() => handleConsultationMethod('At Facility')}
              />
              <label htmlFor="atFacility">At Facility</label>
            </div>

            <div className="checkbox-label">
              <input
                type="radio"
                id="video"
                value="Video"
                checked={consultationMethod === 'Video'}
                onChange={() => handleConsultationMethod('Video')}
              />
              <label htmlFor="video">Video</label>
            </div>
          </>
        )}
 {step === 5 && (
          <>
            <h3>Reservation</h3>
            {selectedDoctor && selectedDate && consultationMethod && appointmentDetails ? (
              <ReservationCard
                doctor={selectedDoctor}
                date={selectedDate}
                consultationMethod={consultationMethod}
                appointmentDetails={appointmentDetails}
              />
            ) : (
              <p>Reservation: Missing data for reservation. Please complete all steps.</p>
            )}
          </>
        )}
        {step !== 1 && step !== 5 &&(
          <button onClick={handleToggleView}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
