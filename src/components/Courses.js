import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, faBook, faDatabase, faFileCode, 
  faGlobe, faCode, faDesktop, faPen, faEdit
} from '@fortawesome/free-solid-svg-icons';
import './Courses.css';

const courses = [
  { icon: faBook, title: 'ACCESS', duration: '15 Days', price: '$100', description: 'Learn the basics of Access.' },
  { icon: faEdit, title: 'ADVANCED EXCEL', duration: '1 Month', price: '$150', description: 'Master advanced Excel features.' },
  { icon: faLaptopCode, title: 'ASP.NET', duration: '3 Months', price: '$300', description: 'Build dynamic web applications.' },
  { icon: faDatabase, title: 'AWD', duration: '5 Months', price: '$500', description: 'Advanced web development.' },
  { icon: faCode, title: 'BASIC', duration: '2 Months', price: '$200', description: 'Learn basic programming concepts.' },
  { icon: faDesktop, title: 'C PLUS PLUS', duration: '1 Month', price: '$100', description: 'Introduction to C++ programming.' },
  { icon: faFileCode, title: 'C PROG', duration: '1 Month', price: '$100', description: 'Learn C Programming.' },
  { icon: faGlobe, title: 'COMP SCIE', duration: '2 Months', price: '$200', description: 'Introduction to Computer Science.' },
  { icon: faBook, title: 'CORE JAVA', duration: '1 Month', price: '$150', description: 'Learn Core Java programming.' },
  { icon: faDatabase, title: 'DCA', duration: '6 Months', price: '$500', description: 'Diploma in Computer Applications.' },
  { icon: faEdit, title: 'DS', duration: '1 Month', price: '$100', description: 'Learn Data Structures.' },
  { icon: faPen, title: 'ENG SPEAKING', duration: '6 Months', price: '$300', description: 'Improve your English speaking skills.' },
  { icon: faLaptopCode, title: 'HTML', duration: '1 Month', price: '$100', description: 'Learn HTML for web development.' },
  { icon: faBook, title: 'INFOR PRAC 12', duration: '2 Months', price: '$200', description: 'Informatics Practices for 12th grade.' },
  { icon: faEdit, title: 'INTERNET', duration: '15 Days', price: '$50', description: 'Basics of Internet usage.' },
  { icon: faDatabase, title: 'MS WORD', duration: '1 Month', price: '$100', description: 'Learn Microsoft Word features.' },
  { icon: faCode, title: 'MY SQL', duration: '1 Month', price: '$100', description: 'Learn MySQL database management.' },
  { icon: faGlobe, title: 'ORACLE', duration: '1 Month', price: '$100', description: 'Learn Oracle database systems.' },
  { icon: faBook, title: 'PGDCA', duration: '1 Year', price: '$1000', description: 'Post Graduate Diploma in Computer Applications.' },
  { icon: faDatabase, title: 'POWERPOINT', duration: '15 Days', price: '$50', description: 'Learn Microsoft PowerPoint.' },
  { icon: faEdit, title: 'PYTHON 11TH', duration: '2 Months', price: '$200', description: 'Python course for 11th grade.' },
  { icon: faPen, title: 'TALLY ERP', duration: '1 Month', price: '$100', description: 'Learn Tally ERP for accounting.' },
  { icon: faBook, title: 'TYPING', duration: '6 Months', price: '$300', description: 'Improve typing speed and accuracy.' },
  { icon: faCode, title: 'VB 6.0', duration: '1 Month', price: '$100', description: 'Learn Visual Basic 6.0 programming.' },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="courses">
      <div className="">
        <h1 className="text-center mb-5 mt-5">Our Courses</h1>
        <div className="courses-wrapper">
          {courses.map((course, index) => (
            <div className="course-card" key={index} onClick={() => handleCourseClick(course)}>
              <div className="course-icon-wrapper">
                <FontAwesomeIcon icon={course.icon} className="course-icon" />
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.duration}</p>
                <button className="course-details-btn">More details</button>
              </div>
            </div>
          ))}
        </div>
        {selectedCourse && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedCourse.title}</h2>
              <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p><strong>Price:</strong> {selectedCourse.price}</p>
              <p>{selectedCourse.description}</p>
              <button className="close-modal-btn" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
