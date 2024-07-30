import React, { useEffect, useState } from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

const announcements = [
  {
    date: '22 Apr',
    title: 'Congratulations to Ashish Bhardwaj',
    content: 'A Beacon of Excellence for Gurukul The School Alumni!',
  },
  {
    date: '14 Apr',
    title: 'Gurukul The School proudly celebrates',
    content: 'its 23rd Foundation Day!',
  },
  {
    date: '28 Mar',
    title: 'Celebrating Ms. Chitra Sharma',
    content: "Remarkable Achievement in International Teachers' Olympiad",
  },
  // Add more announcements as needed
];

const imageSectionData = [
  { src: '/Assets/ATC LOGO.jpeg', label: 'Demo 1' },
  { src: '/Assets/ATC LOGO.jpeg', label: 'Demo 2' },
  { src: '/Assets/ATC LOGO.jpeg', label: 'Demo 3' },
  // Add more images as needed
];

const Home = () => {
  const [showWelcomeSection, setShowWelcomeSection] = useState(false);
  const [showAnnouncements, setShowAnnouncements] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const carouselHeight = document.querySelector('.carousel-inner').offsetHeight;
      if (window.scrollY > carouselHeight) {
        setShowWelcomeSection(true);
      } else {
        setShowWelcomeSection(false);
      }
    };

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

    window.addEventListener('scroll', handleScroll);

    const announcementSection = document.querySelector('.news-announcements');
    if (announcementSection) {
      observer.observe(announcementSection);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (announcementSection) {
        observer.unobserve(announcementSection);
      }
    };
  }, []);


  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/GROUP.jpeg"
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
            src="/Assets/GROUP2.jpeg"
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
            src="/Assets/GROUP3.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Join Us Today!</h3>
            <p>Enroll now to take advantage of our special offers!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/GROUP4.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Join Us Today!</h3>
            <p>Enroll now to take advantage of our special offers!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/5.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Join Us Today!</h3>
            <p>Enroll now to take advantage of our special offers!</p>
          </Carousel.Caption>
        </Carousel.Item>
     
      </Carousel>

      {/* Welcome Section */}
      <div className={`welcome-section ${showWelcomeSection ? 'show' : ''}`}>
        <h2 style={{ color: '#032d64' }}>WELCOME TO ATC</h2>
        <blockquote>
          "The child must know that he is a miracle, that since the beginning of the world
          there hasn't been, and until the end of the world there will not be,
          another child like him."
        </blockquote>
        <footer>- PABLO CASALS</footer>
      </div>

      {/* News & Announcements Section */}
      <div className={`news-announcements ${showAnnouncements ? 'show' : ''}`}>
      <h2 style={{ textAlign: 'center' }}>NEWS & ANNOUNCEMENTS</h2>
      <div className="announcement-carousel">
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement-card">
              <h3>{announcement.date}</h3>
              <h4>{announcement.title}</h4>
              <p>{announcement.content}</p>
              <a href="/About" className="more-info">MORE INFO</a>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <h2 >Explore Our Gallery</h2>
        <div className="image-grid">
          {imageSectionData.map((image, index) => (
            <div key={index} className="image-card">
              <img src={image.src} alt={image.label} />
              <div className="image-label">{image.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore ATC Section */}
      <div className="explore-atc">
        <h2 style={{ textAlign: 'center' }}>Explore ATC</h2>
        <div className="explore-cards">
          <div className="explore-card">
            <h3>Course Overview</h3>
            <p>Discover our wide range of courses designed to suit all levels.</p>
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
