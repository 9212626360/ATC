// src/components/Courses.js
import React from 'react';
import './Courses.css';

const courses = [
  {
    imgSrc: '/Assets/basic-computer-skills-for-students.jpg',
    alt: 'Basic Computer Skills',
    title: 'Basic Computer Skills',
    description: 'Learn the basics of computer operations and software applications, from word processing to internet navigation.',
  },
  {
    imgSrc: '/Assets/typing-basics-regular-typing-lesson.png',
    alt: 'English Typing',
    title: 'English Typing',
    description: 'Improve your typing speed and accuracy in English with our comprehensive typing courses.',
  },
  {
    imgSrc: '/Assets/hindi-typing-finger-position.jpg',
    alt: 'Hindi Typing',
    title: 'Hindi Typing',
    description: 'Enhance your typing skills in the Hindi language, with courses designed for beginners and advanced learners alike.',
  },
  {
    imgSrc: '/Assets/short hand 23123.jpg',
    alt: 'Shorthand Stenography',
    title: 'Shorthand Stenography',
    description: 'Master the art of shorthand stenography, an essential skill for secretaries, journalists, and other professionals.',
  },
];

const Courses = () => {
  return (
    <div className="courses">
      <div className="container">
        <h1 className="text-center mb-5"> <br></br>Our Courses</h1>
        <div className="courses-wrapper">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-image-wrapper">
                <img src={course.imgSrc} alt={course.alt} className="course-image" />
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
