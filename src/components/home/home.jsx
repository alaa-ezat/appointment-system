import React from 'react';
import { Link } from "react-router-dom";
import './home.css'; 

const Home = () => {
  return (
    <div className="home-page">
      <h2>Discover MedAppoin - Your Health Companion</h2>
      <p>
        Easily schedule your appointments, review your medical records, and prioritize your health effortlessly. Elevate your health journey with MedAppoin, where care meets convenience.
      </p>
      <Link to="/dashboard">
        <button className="make-appointment">Make Appointment</button>
      </Link>
    </div>
  );
};

export default Home;

