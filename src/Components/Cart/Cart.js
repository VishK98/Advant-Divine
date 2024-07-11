import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>You are eligible for free shipping.</p>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="checkout">
        <button>Checkout - Rs. {total}</button>
      </div>
    </div>
  );
};

export default Cart;
