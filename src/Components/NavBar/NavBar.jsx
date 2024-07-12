import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.jpeg";
import { BiHeart, BiCart, BiUser, BiMenu, BiX } from 'react-icons/bi';
import CartSideBar from "../CartSideBar/CartSideBar";
import "./Nav.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
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
    <>
      <div className={`nav__bar p-lg-2 ${showSearchBar ? 'scroll-active' : ''}`}>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-3 col-3">
            <div className="first-box d-flex align-items-center">
              <Button
                variant="link"
                className="navbar__hamburger"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMenuOpen ? <BiX /> : <BiMenu />}
              </Button>
              <span
                className="navbar__text d-none d-md-inline ms-3"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </div>
          </div>
          <div className="col-md-6 col-6 text-center">
            <Link to="/">
              <img className="logo__image" src={logo} alt="Company Logo" />
            </Link>
          </div>
          <div className="col-md-3 col-3">
            <div className="third-box d-flex justify-content-end align-items-center navbar__margin">
              <a
                href="tel:+1234567890"
                className="call-us-link d-none d-md-inline me-3 navbar__text"
              >
                <p className="navbar__text mt-3">Call Us</p>
              </a>
              <Link to="/favorites" className="call-us-link me-3">
                <BiHeart fontSize="20px" />
              </Link>
              <button onClick={toggleCart} className="call-us-link me-3" style={{ background: 'none', border: 'none' }}>
                <BiCart fontSize="20px" />
              </button>
              <Link to="/login" className="call-us-link me-3">
                <BiUser fontSize="20px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CartSideBar isOpen={isCartOpen} toggleSidebar={toggleCart} />
    </>
  );
};

export default Navbar;
