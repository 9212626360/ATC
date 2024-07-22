// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <p><strong>Director:</strong> Ashish Gupta</p>
            <p><strong>Phone:</strong> 807630009</p>
            <p><strong>Email:</strong> info@aggarwaltypingcollege.com</p>
            <p><strong>Location:</strong> Palam Colony (Kailash Puri), near JBM Public School</p>
          </div>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/600x400" alt="Contact Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
