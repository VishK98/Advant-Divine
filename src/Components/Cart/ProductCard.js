import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>Rs. {product.price}</p>
      <button onClick={() => addToCart(product)}>Choose Options</button>
    </div>
  );
};

export default ProductCard;
