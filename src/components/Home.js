// src/components/Home.js
import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel

const Home = () => {
  return (
    <div className="home">
      {/* Offer of the Day Section Below Navbar */}
      <div className="offer-of-the-day-banner">
        <p>Offer of the Day: Enroll in advance Excel course with a free typing course!</p>
      </div>

      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png"
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
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Our Specialized Courses</h3>
            <p>Offering a range of typing and computer courses to meet your needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Join Us Today!</h3>
            <p>Enroll now to take advantage of our special offers!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Statistics Section */}
      <div className="statistics">
        <h1>Our Achievements</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="stat-card">
              <h2>Total Students</h2>
              <p>5000+</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <h2>Students Passed</h2>
              <p>4000+</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <h2>Jobs Found</h2>
              <p>100+</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <h2>Market Score</h2>
              <p>4.5/5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h1>What Our Students Say</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-card">
              <p>"The courses here are well-structured and helped me land a great job!"</p>
              <h4>- School A</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-card">
              <p>"Excellent training with hands-on experience. Highly recommended!"</p>
              <h4>- School B</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-card">
              <p>"Aggarwal Typing College provided me with the skills needed for my career."</p>
              <h4>- School C</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Offer of the Day Section */}
      <div className="offer-of-the-day">
        <h1>Offer of the Day</h1>
        <p>Enroll in any course today and get a 20% discount! Limited time offer.</p>
        <a href="#enroll" className="btn btn-primary">Enroll Now</a>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <p>Aggarwal Typing College</p>
              <p>Palam Colony (Kailash Puri), Near JBM Public School</p>
              <p>Phone: 807630009</p>
              <p>Email: info@aggarwaltypingcollege.com</p>
            </div>
            <div className="col-md-4">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/enquiry">Enquiry</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Follow Us</h4>
              <ul className="social-media">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p>&copy; 2024 Sarawaswati Designs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
