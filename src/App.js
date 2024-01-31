import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import Signup from './components/signup/signup'
import AppointmentForm from './components/appointmentform/appiontmentform';
import Dashboard from './components/dashboard/dashboard';
import DoctorSelection from './components/doctorselection/doctorselection';
import DateSelection from './components/dataselection/dataselection';
import ReservationCard from './components/reservationcard/reservationcard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointmentform" element={<AppointmentForm />} />
        <Route path="/doctorselection" element={<DoctorSelection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dateselection" element={<DateSelection />} />
        <Route path="/reservationcard" element={<ReservationCard />} />
        </Routes>
    </Router>
  );
};

export default App;
