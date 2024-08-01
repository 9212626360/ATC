import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Import FontAwesome icons from react-icons/fa
import { FaHome, FaEnvelope, FaGraduationCap, FaUsers, FaMoneyBill, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled || !isHomePage ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            style={{ height: '65px', width: '75px' }}
            src="/Assets/ULogo.jpeg"
            alt="Logo"
            className={`navbar-logo ${scrolled || !isHomePage ? 'navbar-logoscrolled' : ''}`}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome className="nav-icon" />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <FaUsers className="nav-icon" />
                <span>About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                <FaGraduationCap className="nav-icon" />
                <span>Courses</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link enquiry-link" to="/enquiry">
                <FaEnvelope className="nav-icon" />
                <span>Enquiry</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admissions">
                <FaGraduationCap className="nav-icon" />
                <span>Admissions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pay-fee">
                <FaMoneyBill className="nav-icon" />
                <span>Pay Fee</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                <FaUser className="nav-icon" />
                <span>Explore</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
