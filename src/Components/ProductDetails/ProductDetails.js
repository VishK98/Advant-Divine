import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import "./ProductDetails.css";
import Footer from "../Footer/footer";
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import Tab from "./Tab";
import ProductGallery from "../ProductDetails/ProductGallery"; // Adjust the import path as necessary
import { Link } from "react-router-dom";

function ProductDetails() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
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
                <p className="product-name">Product 1 </p>
                <p className="product-amount">₹ 3,000.00</p>
              </div>
              <Tab />
              <div className="size-box">
                {sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`size ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
              <div className="center-div">
                <div className="button-row">
                <button className="cart-btn" onClick={handleAddToCartClick}>
                  ADD TO CART
                </button>
                  <div className="favorite-button">
                    <Link to="/favorites" className="call-us-link">
                      <i
                        className="bi bi-heart"
                        style={{ marginTop: "6px", marginLeft: "13px" }}
                      ></i>
                    </Link>
                  </div>
                  <div className="favorite-button">
                    <Link to="/favorites" className="call-us-link">
                      <i
                        className="bi bi-share"
                        style={{ marginLeft: "-2px" }}
                      ></i>
                    </Link>
                  </div>
                </div>
                
                <button className="buynow-btn" onClick={handleBuyNowClick}>
                    BUY IT NOW
                  </button>
              </div>
            </div>
          </div>
        </div>
        <ProductGallery />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
