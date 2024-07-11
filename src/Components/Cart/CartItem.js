import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>Size: {item.size}</p>
        <div className="quantity-control">
          <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
        </div>
      </div>
      <p>Rs. {item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
