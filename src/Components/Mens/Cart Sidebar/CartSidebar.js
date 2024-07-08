import React from 'react';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, toggleSidebar, cartItems, setCartItems }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="cart-sidebar-header">
                <h2><FaShoppingCart /> Shopping Cart</h2>
                <FaTimes onClick={toggleSidebar} className="close-icon" />
            </div>
            <div className="cart-sidebar-content">
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p className="cart-item-name">{item.name}</p>
                                    <p className="cart-item-price">Rs. {item.price}</p>
                                    <div className="cart-item-quantity">
                                        <button>-</button>
                                        <span>{item.quantity}</span>
                                        <button>+</button>
                                    </div>
                                </div>
                                <FaTimes className="remove-icon" onClick={() => removeItem(item.id)} />
                            </div>
                        ))}
                        <div className="cart-sidebar-footer">
                            <div className="cart-subtotal">
                                <p>Subtotal:</p>
                                <p>Rs. {calculateTotal()}</p>
                            </div>
                            <div className="cart-total">
                                <p>Total:</p>
                                <p>Rs. {calculateTotal()}</p>
                            </div>
                            <button className="checkout-btn">CHECKOUT</button>
                            <button className="view-cart-btn">VIEW CART</button>
                        </div>
                    </>
                ) : (
                    <p className="empty-cart">Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
