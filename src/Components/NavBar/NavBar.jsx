import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../NavBar/Nav.css";
import logo from "../../Assets/Images/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // scrolling functionality

  useEffect(() => {
    // Add scroll event listener to show search bar when user starts scrolling
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
    <div className="nav__bar p-lg-4">
      <div className="row justify-content-between">
        <div className="col-md-2 col-3">
          <div className="first-box">
            <div className="row ">
              <div className="left">
              <div className="col-auto d-flex ">
                <Button
                  variant="link"
                  className={`navbar__hamburger ${
                    isMenuOpen ? "open" : "nav__menu__button__margin"
                  }`}
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                  <div className="hamburger__line"></div>
                  <div className="hamburger__line"></div>
                  <div className="hamburger__line"></div>
                </Button>
                <span className="navbar__text d-none d-md-inline ms-3">
                  {isMenuOpen ? " Close" : "Menu"}
                </span>
              </div>
              {/* desktop view */}

              <div className="col-auto d-none d-md-block">
                <div className="search__bar">
                  <Link
                    to="/search"
                    className="call-us-link"
                    style={{ display: "flex" }}
                  >
                    <i
                      style={{ fontSize: "20px",  }}
                      className="bi bi-search"
                    ></i>
                    <div className="ms-4" style={{ width: "auto" }}></div>
                    <p className="search__text">Search</p>
                  </Link>
                </div>
              </div>

              </div>
              {/* mobile view */}
              <div className="col-auto d-md-none">
                <div
                  className={`search__bar ${
                    showSearchBar ? "visible" : "hidden"
                  }`}
                >
                  <Link
                    to=""
                    className="call-us-link"
                    style={{ display: "flex" }}
                    onClick={scrollToTop}
                  >
                    <i
                      style={{ fontSize: "25px", marginTop: "5px" }}
                      className="bi bi-search"
                    ></i>
                    <p className="search__text d-none d-md-inline">Search</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-6">
          <div className="second-box">
            <img className="logo__image" src={logo} />
          </div>
        </div>
        <div className="col-md-2 col-3">
          <div className="third-box">
            <a
              href="tel:+1234567890"
              className="call-us-link d-none d-md-inline ms-2"
            >
              <p className="navbar__text ">Call Us</p>
            </a>
            <a href="#" className="call-us-link">
              <i className="bi bi-person"></i>
            </a>
            <a
              href="tel:+1234567890"
              className="call-us-link d-none d-md-inline ms-2"
            >
              <i className="bi bi-heart navbar__icon"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Navbar menu (hidden by default, toggled by hamburger icon) */}
      <div className={`navbar__menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#" className="navbar__menuitem">
          Portfolio
        </a>
        <a href="#" className="navbar__menuitem">
          About
        </a>
        <a href="#" className="navbar__menuitem">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
