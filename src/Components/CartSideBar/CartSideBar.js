import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartSideBar.css'; // Optional: Import your CSS file for styling

const CartSideBar = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  const openLeftMenu = () => {
    setIsLeftMenuOpen(true);
  };

  const closeLeftMenu = () => {
    setIsLeftMenuOpen(false);
  };

  const openRightMenu = () => {
    setIsRightMenuOpen(true);
  };

  const closeRightMenu = () => {
    setIsRightMenuOpen(false);
  };

  return (
    <>
      {/* Left Menu */}
      <div className={`w3-sidebar w3-bar-block w3-card w3-animate-left ${isLeftMenuOpen ? 'open' : ''}`}>
        <button onClick={closeLeftMenu} className="w3-bar-item w3-button w3-large">Close &times;</button>
        <Link to="/" className="w3-bar-item w3-button">Home</Link>
        <Link to="/about" className="w3-bar-item w3-button">About</Link>
        <Link to="/contact" className="w3-bar-item w3-button">Contact</Link>
      </div>

      {/* Right Menu */}
      <div className={`w3-sidebar w3-bar-block w3-card w3-animate-right ${isRightMenuOpen ? 'open' : ''}`} style={{ right: 0 }}>
        <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large">Close &times;</button>
        <Link to="/profile" className="w3-bar-item w3-button">Profile</Link>
        <Link to="/settings" className="w3-bar-item w3-button">Settings</Link>
        <Link to="/logout" className="w3-bar-item w3-button">Logout</Link>
      </div>

      {/* Main Content */}
      <div className="w3-teal">
        <button className="w3-button w3-teal w3-xlarge w3-left" onClick={openLeftMenu}>&#9776;</button>
        <button className="w3-button w3-teal w3-xlarge w3-right" onClick={openRightMenu}>&#9776;</button>
        <div className="w3-container">
          <h1>My Page</h1>
        </div>
      </div>

      <div className="w3-container">
        <p>In this example, we demonstrate how to use two side navigations.</p>
        <p>We have created two "menu" buttons: one to open the side navigation from the left and one to open it from the right.</p>
      </div>
    </>
  );
};

export default CartSideBar;
