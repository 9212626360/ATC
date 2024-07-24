// src/components/Courses.js
import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses">
      <div className="container">
        <h1>Our Courses</h1>
        <div className="row">
          <div className="col-md-4">
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png" alt="Basic Computer Skills" className="img-fluid" />
            <h3>Basic Computer Skills</h3>
            <p>Learn the basics of computer operations and software applications, from word processing to internet navigation.</p>
          </div>
          <div className="col-md-4">
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png" alt="English Typing" className="img-fluid" />
            <h3>English Typing</h3>
            <p>Improve your typing speed and accuracy in English with our comprehensive typing courses.</p>
          </div>
          <div className="col-md-4">
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png" alt="Hindi Typing" className="img-fluid" />
            <h3>Hindi Typing</h3>
            <p>Enhance your typing skills in the Hindi language, with courses designed for beginners and advanced learners alike.</p>
          </div>
          <div className="col-md-4">
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png" alt="Shorthand Stenography" className="img-fluid" />
            <h3>Shorthand Stenography</h3>
            <p>Master the art of shorthand stenography, an essential skill for secretaries, journalists, and other professionals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
