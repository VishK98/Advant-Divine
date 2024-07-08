import React, { useState } from 'react';
import Navbar from "../NavBar/NavBar";
import './ProductDetails.css';
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import Tab from "./Tab";

function ProductDetails() {
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL','XXXL'];
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        console.log(`Selected size: ${size}`);
    };
    const handleBuyNowClick = () => {
        console.log("Buy Now clicked");
    };

    const handleAddToCartClick = () => {
        console.log("Add to Cart clicked");
    };


    return (
        <>
            <Navbar />
            <div className="container-fluid mt-3 mt-lg-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="image-container">
                            <img className="product-img mb-3" src={C2P1} alt="Product 1" />
                            <img className="product-img mb-3" src={C2P2} alt="Product 2" />
                            <img className="product-img mb-3" src={C2P3} alt="Product 3" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div>
                                <p className='product-name'>Product 1 </p>
                                <p className='product-amount'>₹ 3,000.00</p>
                            </div>
                            <Tab />
                            <div className="size-box">
                                {sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`size ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                            <div className="buttons-container">
                                <button className="cart-buy-btn buy-now-btn" onClick={handleBuyNowClick}>BUY IT NOW</button>
                                </div>
                                <div>
                                <button className="cart-buy-btn add-to-cart-btn" onClick={handleAddToCartClick}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;
