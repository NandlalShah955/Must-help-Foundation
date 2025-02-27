import React, { useState,useEffect } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import { FiSearch, FiHeart } from 'react-icons/fi';
import '../styles/Navbar.css'; // Import the custom CSS file
import logo from '../assets/Must-help-logo.png';

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  useEffect(() => {
    setShowNavbar(false);
  }, [location]);
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <Link to='/'>
          <img src={logo} alt="Must Help Foundation" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>

        {/* Navigation Links */}
        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" className="menu-item" >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-item">
                About us
              </Link>
            </li>
            <li>
              <Link to="/cause" className="menu-item">
                Causes
              </Link>
            </li>
            <li>
              <Link to="/blog" className="menu-item">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="menu-item">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar and Heart Icon */}
        <div className="navbar-right">
          <div className="search-bar">
            <FiSearch className="search-icon" />
          </div>
          <div className="heart-icon">
            <FiHeart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;