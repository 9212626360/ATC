import React, { useEffect, useState } from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import CircularProgress from '@mui/material/CircularProgress';

const announcements = [
  {
    date: '22 Apr 2024',
    title: 'Congratulations to Ashish Bhardwaj',
    content: 'A Beacon of Excellence for ATC The School Alumni!',
  },
  {
    date: '14 Apr 2024',
    title: 'Gurukul The School proudly celebrates',
    content: 'its 23rd Foundation Day!',
  },
  {
    date: '28 Mar 2024',
    title: 'Celebrating Ms. Chitra Sharma',
    content: "Remarkable Achievement in International Teachers' Olympiad",
  },
  // Add more announcements as needed
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
        <h2>Unlock Your Potential with Our Comprehensive IT and Typing Courses</h2>
        <blockquote>
          "At ATC, we are committed to empowering individuals with essential computer skills and typing proficiency, setting the foundation for a successful career in today's digital age. Our courses are designed for everyone, whether you're a beginner looking to understand the basics or someone seeking to enhance your existing skills.."
        </blockquote>
        <footer>- PABLO CASALS</footer>
      </div>

      {/* News & Announcements Section */}
      <div className={`news-announcements ${showAnnouncements ? 'show' : ''}`}>
        <h2>NEWS & ANNOUNCEMENTS</h2>
        <div className="announcement-carousel">
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement-card">
              <h3>{announcement.date}</h3>
              <h4>{announcement.title}</h4>
              <p>{announcement.content}</p>
              <a href="/About" className="more-info">
                MORE INFO
              </a>
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

      {/* Explore ATC Section */}
      <div className="explore-atc">
        <h2>Explore ATC</h2>
        <div className="explore-grid">
          <div className="explore-card">
            <h3>Courses</h3>
            <p>Discover our wide range of courses designed to suit.</p>
            <a href="/About" className="more-info">LEARN MORE</a>
          </div>
          <div className="explore-card">
            <h3>Our Campus</h3>
            <p>Experience our state-of-the-art facilities and resources.</p>
            <a href="/About" className="more-info">TAKE A TOUR</a>
          </div>
          <div className="explore-card">
            <h3>Faculty & Staff</h3>
            <p>Meet our experienced and dedicated team of educators.</p>
            <a href="/About" className="more-info">MEET THE TEAM</a>
          </div>
        </div>
      </div>

      {/* Glory Galore Section */}
      <div className="glory-galore">
        <h2>Glory Galore</h2>
        <div className="glory-content">
          <div className="glory-card">
            <h3>Achievements</h3>
            <p>Our students have excelled in various fields, showcasing their skills and talents.</p>
          </div>
          <div className="glory-card">
            <h3>Awards</h3>
            <p>Recognizing outstanding performances and contributions in various domains.</p>
          </div>
          <div className="glory-card">
            <h3>Notable Events</h3>
            <p>Highlights of significant events and milestones in our journey.</p>
          </div>
        </div>
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
            <div className="col-md-4">
              <h4>Follow Us</h4>
              <ul className="social-media">
                {/* <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li> */}
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
