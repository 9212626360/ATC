import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
// import CircularProgress from '@mui/material/CircularProgress';
import { Fade, Slide } from "react-awesome-reveal";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "The courses here are amazing! I learned so much and the teachers are very supportive.",
  },
  {
    name: "Jane Smith",
    feedback:
      "ATC has been a fantastic place to learn typing and computer skills. Highly recommended!",
  },
  {
    name: "Rahul Sharma",
    feedback:
      "The environment and teaching methods at ATC are top-notch. Great place to enhance your skills.",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/Slider2.png"
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
            src="/Assets/1722404645637.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Welcome Section */}
      <div className="welcome-section">
        <Slide triggerOnce direction="left">
          <h2>
            <span className="highlight" style={{ color: "#1b439b" }}>
              "Your Journey to Digital Excellence."
            </span>
          </h2>
        </Slide>
        <Fade triggerOnce>
          <blockquote style={{ fontSize: "20px" }}>
            "Education is about more than just knowledge; it's about building
            character and self-confidence. True education empowers individuals
            to realize their potential and contribute positively to society."
          </blockquote>
          <footer style={{ fontSize: "22px" }}>- Swami Vivekananda</footer>
        </Fade>
      </div>

      {/* Explore ATC Section */}
      <div className="explore-atc">
        <p style={{ fontSize: "50px" }}>
          <span
            style={{ marginRight: "5px", color: "#1b439b", fontWeight: 400 }}
          >
            Courses
          </span>
          <span className="stroke">ATC</span>
        </p>

        <div className="explore-grid">
          <div className="explore-card">
            <h3>Basic Computer</h3>
            <p>Learn the basics of computers and essential software.</p>
            <a href="/courses" className="more-info">
              LEARN MORE
            </a>
          </div>
          <div className="explore-card">
            <h3>English Typing</h3>
            <p>Master English typing skills with our expert guidance.</p>
            <a href="/courses" className="more-info">
              LEARN MORE
            </a>
          </div>
          <div className="explore-card">
            <h3>Hindi Typing</h3>
            <p>Enhance your Hindi typing proficiency.</p>
            <a href="/courses" className="more-info">
              LEARN MORE
            </a>
          </div>
          <div className="explore-card">
            <h3>Stenography</h3>
            <p>Learn shorthand stenography for quick note-taking.</p>
            <a href="/courses" className="more-info">
              LEARN MORE
            </a>
          </div>
          <div className="explore-card">
            <h3>Web Designing</h3>
            <p>Get skilled in web design and create stunning websites.</p>
            <a href="/courses" className="more-info">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <p style={{ fontSize: "50px" }}>
          <span
            style={{ marginRight: "5px", color: "#1b439b", fontWeight: 400 }}
          >
            What Our{" "}
          </span>
          <span className="stroke">Student Say</span>
        </p>
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
        <p style={{ fontSize: "50px" }}>
          <span style={{ marginRight: "5px", color: "white", fontWeight: 400 }}>
            STATIC
          </span>
          <span className="strokeStatictics">stics</span>
        </p>
        <div className="stats-cards">
          <Slide triggerOnce direction="up">
            <div className="stats-card">
              <div className="icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>100+</h3>
              <p>Students Enrolled</p>
            </div>
          </Slide>
          <Slide triggerOnce direction="up" delay={100}>
            <div className="stats-card">
              <div className="icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>20+</h3>
              <p>Courses Offered</p>
            </div>
          </Slide>
          <Slide triggerOnce direction="up" delay={200}>
            <div className="stats-card">
              <div className="icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>95%</h3>
              <p>Student Success Rate</p>
            </div>
          </Slide>
          <Slide triggerOnce direction="up" delay={300}>
            <div className="stats-card">
              <div className="icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
          </Slide>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="join-us">
      <p style={{ fontSize: "50px" }}>
          <span style={{ marginRight: "5px", color: "#1b439b", fontWeight: 400 }}>
            Learning@</span>
          <span className="stroke">ATC</span>
        </p>
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
          <div className="footer-column logo-column">
            <img
              src="/Assets/ULogo.jpeg"
              alt="Aggarwal Typing College"
              className="footer-logo"
            />
          </div>
          <div className="footer-column contact-column">
            <h4>Contact Us</h4>
            <address>
              Aggarwal Typing College
              <br />
              Palam Colony (Kailash Puri), Near JBM Public School
              <br />
              Phone: <a href="tel:+918076307009">8076307009</a>
              <br />
              Email:{" "}
              <a href="mailto:info@aggarwaltypingcollege.com">
                info@aggarwaltypingcollege.com
              </a>
            </address>
          </div>
          <div className="footer-column links-column">
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
                <a href="/admissionform">Admission Form</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column social-column">
            <h4>Follow Us</h4>
            <ul className="social-media">
              <li>
                <a href="/about">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/about">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/about">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; 2024 Sarawaswati Designs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
