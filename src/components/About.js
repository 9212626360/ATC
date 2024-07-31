// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About</h1>
        <div className="row">
          <div className="col-md-6">
            <p>
              Established in 2000, Aggarwal Typing College has been a cornerstone of typing and computer education in Palam Colony. Our experienced instructors are dedicated to providing high-quality education in typing, shorthand stenography, and basic computer skills. We believe in practical, hands-on learning and offer courses tailored to meet the needs of our students.
            </p>
            <p>
              Our mission is to empower students with the skills they need to succeed in today's digital world. Whether you're looking to improve your typing speed, learn a new language, or gain essential computer skills, Aggarwal Typing College has the right course for you.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/Assets/CircleBanner.jpeg" alt="About Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
