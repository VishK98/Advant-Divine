import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddCartButton = () => {
  return (
    <div>
      <Link to="/product-details">
        <button className="add2cart-btn">
          <FaShoppingCart className="icon" />&nbsp;&nbsp;&nbsp;ADD TO CART
        </button>
      </Link>
    </div>
  );
};

export default AddCartButton;
