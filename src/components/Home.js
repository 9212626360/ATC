import React, { useEffect, useState } from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import CircularProgress from '@mui/material/CircularProgress';
import { Fade, Slide } from 'react-awesome-reveal';

const announcements = [
  // Your announcements data
];

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'The courses here are amazing! I learned so much and the teachers are very supportive.',
  },
  {
    name: 'Jane Smith',
    feedback: 'ATC has been a fantastic place to learn typing and computer skills. Highly recommended!',
  },
  {
    name: 'Rahul Sharma',
    feedback: 'The environment and teaching methods at ATC are top-notch. Great place to enhance your skills.',
  },
];

const Home = () => {
  const [showAnnouncements, setShowAnnouncements] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAnnouncements(true);
          } else {
            setShowAnnouncements(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const announcementSection = document.querySelector('.news-announcements');
    if (announcementSection) {
      observer.observe(announcementSection);
    }
  }, []);

  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/1722404645637.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Aggarwal Typing College</h3>
            <p>Learn the best typing and computer skills with us!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/1722404727645.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Welcome Section */}
      <div className="welcome-section">
        <Slide triggerOnce direction="left">
          <h2><span className="highlight">Unlock Your Potential</span> with Our Comprehensive IT and Typing Courses</h2>
        </Slide>
        <Fade triggerOnce>
          <blockquote>
            "At ATC, we are committed to empowering individuals with essential computer skills and typing proficiency, setting the foundation for a successful career in today's digital age. Our courses are designed for everyone, whether you're a beginner looking to understand the basics or someone seeking to enhance your existing skills."
          </blockquote>
          <footer>- PABLO CASALS</footer>
        </Fade>
      </div>

      {/* Explore ATC Section */}
      <div className="explore-atc">
        <h2>Explore ATC</h2>
        <div className="explore-grid">
          <div className="explore-card">
            <h3>Basic Computer</h3>
            <p>Learn the basics of computers and essential software.</p>
            <a href="/courses" className="more-info">LEARN MORE</a>
          </div>
          <div className="explore-card">
            <h3>English Typing</h3>
            <p>Master English typing skills with our expert guidance.</p>
            <a href="/courses" className="more-info">LEARN MORE</a>
          </div>
          <div className="explore-card">
            <h3>Hindi Typing</h3>
            <p>Enhance your Hindi typing proficiency.</p>
            <a href="/courses" className="more-info">LEARN MORE</a>
          </div>
          <div className="explore-card">
            <h3>Stenography</h3>
            <p>Learn shorthand stenography for quick note-taking.</p>
            <a href="/courses" className="more-info">LEARN MORE</a>
          </div>
          <div className="explore-card">
            <h3>Web Designing</h3>
            <p>Get skilled in web design and create stunning websites.</p>
            <a href="/courses" className="more-info">LEARN MORE</a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Slide triggerOnce direction="up">
                <p>"{testimonial.feedback}"</p>
                <h4>- {testimonial.name}</h4>
              </Slide>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics">
        <h2>Statistics</h2>
        <div className="stats-cards">
          <div className="stats-card">
            <CircularProgress variant="determinate" value={100} size={120} thickness={2} />
            <h3>100+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stats-card">
            <CircularProgress variant="determinate" value={20} size={120} thickness={2} />
            <h3>20+</h3>
            <p>Courses Offered</p>
          </div>
          <div className="stats-card">
            <CircularProgress variant="determinate" value={95} size={120} thickness={2} />
            <h3>95%</h3>
            <p>Student Success Rate</p>
          </div>
          <div className="stats-card">
            <CircularProgress variant="determinate" value={10} size={120} thickness={2} />
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="join-us">
        <h2>Join Us</h2>
        <form className="join-form">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Contact" required />
          <input type="text" placeholder="Location" required />
          <select required>
            <option value="">Select Course</option>
            <option value="basic-computer">Basic Computer</option>
            <option value="english-typing">English Typing</option>
            <option value="hindi-typing">Hindi Typing</option>
            <option value="stenography">Stenography</option>
            <option value="web-designing">Web Designing</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Aggarwal Typing College</p>
            <p>Palam Colony (Kailash Puri), Near JBM Public School</p>
            <p>Phone: 807630009</p>
            <p>Email: info@aggarwaltypingcollege.com</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/enquiry">Enquiry</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-media">
              {/* Add social media links here */}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p>&copy; 2024 Sarawaswati Designs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
