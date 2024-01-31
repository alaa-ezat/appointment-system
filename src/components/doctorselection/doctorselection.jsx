import React, { useState } from 'react';
import './doctorselection.css';



const DoctorSelection = ({ onDoctorSelect }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const specialties = [
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'orthopedics', name: 'Orthopedics' },
    
  ];

  const doctorsBySpecialty = {
    cardiology: [
      { id: 'john_doe', name: 'Dr. John Doe' },
      { id: 'jane_smith', name: 'Dr. Jane Smith' },
    ],
    pediatrics: [
      { id: 'olivia_turner', name: 'Dr. Olivia Turner' },
      { id: 'brian_miller', name: 'Dr. Brian Miller' },
    ],
    orthopedics: [
      { id: 'david_wilson', name: 'Dr. David Wilson' },
      { id: 'sarah_davis', name: 'Dr. Sarah Davis' },
    ],
   
  };

  const handleSpecialtyChange = (event) => {
    const selectedSpecialty = event.target.value;
    setSelectedSpecialty(selectedSpecialty);
    setSelectedDoctor('');
  };

  const handleDoctorChange = (event) => {
    const selectedDoctor = event.target.value;
    setSelectedDoctor(selectedDoctor);
    onDoctorSelect(selectedDoctor);
  };

  return (
    <div>
      <h2>Select your doctor by specialty to book an in-person consultation.</h2>
      <label>
        Select Specialty:
        <select value={selectedSpecialty} onChange={handleSpecialtyChange}>
          <option value="" disabled>
            Please Select
          </option>
          {specialties.map((specialty) => (
            <option key={specialty.id} value={specialty.id}>
              {specialty.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      {selectedSpecialty && (
        <label>
          Select Doctor:
          <select value={selectedDoctor} onChange={handleDoctorChange}>
            <option value="" disabled>
              Please Select
            </option>
            {doctorsBySpecialty[selectedSpecialty].map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
};

export default DoctorSelection;
