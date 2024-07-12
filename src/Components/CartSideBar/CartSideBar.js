import React, { useState, useEffect } from 'react';
import './CartSideBar.css';


const CartSideBar = ({ isOpen, toggleSidebar }) => {
    useEffect(() => {
        // Disable background scroll when cart sidebar is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <span className='cart-title'>Cart</span>
                <button className="close-btn" onClick={toggleSidebar}>X</button>
            </div>
            <div className="cart-content">
                {/* Cart content goes here */}
                <div className='empty'>
                    <p>Your cart is currently empty</p>
                    <button type="submit" className="return2home"onClick={toggleSidebar}>
                        RETURN TO SHOP
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartSideBar;
