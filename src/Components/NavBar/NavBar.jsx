import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.jpeg";
import { BiCart } from 'react-icons/bi';
import "./Nav.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSearchBar(true);
      } else {
        setShowSearchBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav__bar p-lg-2">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-2 col-3">
          <div className="first-box d-flex align-items-center">
            <Button
              variant="link"
              className="navbar__hamburger"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
            </Button>
            <span
              className="navbar__text d-none d-md-inline ms-3"
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </span>
            {/* <Link to="/search" className="call-us-link me-3">
              <i className="bi bi-search"></i>
            </Link> */}

            <div>
              {/* <Link to="/search" className="mt-3 navbar__text">
                {" "}
                Search
              </Link> */}
            </div>
          </div>
        </div>
        <div className="col-md-8 col-6 text-center">
          <img className="logo__image" src={logo} alt="Logo" />
        </div>
        <div className="col-md-2 col-3">
          <div className="third-box d-flex justify-content-end align-items-center navbar__margin">
            <a
              href="tel:+1234567890"
              className="call-us-link d-none d-md-inline me-3 navbar__text"
            >
              <p className="navbar__text mt-3">Call Us</p>
            </a>
            <Link to="/favorites" className="call-us-link me-3">
              <i className="bi bi-heart"></i>
            </Link>
            <Link to="/cart" className="call-us-link">
      <span role="img" aria-label="Cart" className="cart-icon">🛒</span>
    </Link>
          </div>
        </div>
      </div>
      {/* <div className={`navbar__menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/gifts" className="navbar__menuitem">Gifts</Link>
        <Link to="/new" className="navbar__menuitem">New</Link>
        <Link to="/bags" className="navbar__menuitem">Bags</Link>
        <Link to="/women" className="navbar__menuitem">Women</Link>
        <Link to="/men" className="navbar__menuitem">Men</Link>
        <Link to="/jewellery" className="navbar__menuitem">Jewellery</Link>
        <Link to="/watches" className="navbar__menuitem">Watches</Link>
        <Link to="/perfumes" className="navbar__menuitem">Perfumes</Link>
        <Link to="/art-of-living" className="navbar__menuitem">Art of Living</Link>
        <Link to="/services" className="navbar__menuitem">Services</Link>
        <Link to="/world-of-louis-vuitton" className="navbar__menuitem">World of Louis Vuitton</Link>
      </div> */}
    </div>
  );
};

export default Navbar;
