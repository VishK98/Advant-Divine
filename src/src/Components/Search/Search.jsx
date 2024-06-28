import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import "./Search.css";
import Magazine from "../../Assets/Images/magazine.webp";
import Magazine1 from "../../Assets/Images/magazine-1.webp";
import Product1 from "../../Assets/Images/product.jpg";
import Product2 from "../../Assets/Images/product2.jpg";

const pageVariants = {
  initial: {
    opacity: 0,
    y: -1000,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 1000,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
  when: "beforeChildren",
};

function Search() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#F2F3F4" }}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div style={{ background: "#fff", height: "100vh" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9 d-flex justify-content-end align-items-end">
                <form className="search-container">
                  <input
                    type="text"
                    id="search-bar"
                    placeholder="Search Avant Divine Iconic Products"
                  />
                  <a href="#">
                    <img
                      className="search-icon"
                      src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                      alt="Search"
                    />
                  </a>
                </form>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center mb-4">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  width="40"
                  height="40"
                  src="https://img.icons8.com/laces/64/delete-sign.png"
                  alt="delete-sign"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(-1)}
                />
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "-35px" }} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 p-5">
                <div style={{ display: "flex" }}>
                  <div className="women col-md-6">
                    <p className="title-text">WOMEN</p>
                    <p className="subtitle-text" style={{ marginTop: "-0px" }}>
                      <Link to="/sneakers">Sneakers</Link>
                    </p>
                    <p className="subtitle-text">
                      <Link to="/tops">Tops</Link>
                    </p>
                    <p className="subtitle-text">
                      <Link to="/silk-squares-and-bandeaus">
                        Silk Squares and Bandeaus
                      </Link>
                    </p>
                    <p className="subtitle-text">
                      <Link to="/all-fashion-jewellery">
                        All Fashion Jewellery
                      </Link>
                    </p>
                  </div>

                  <div className="men col-md-6">
                    <p className="title-text">MEN</p>
                    <p className="subtitle-text" style={{ marginTop: "-0px" }}>
                      <Link to="/hats-and-gloves">Hats and Gloves</Link>
                    </p>
                    <p className="subtitle-text">
                      <Link to="/sunglasses">Sunglasses</Link>
                    </p>
                    <p className="subtitle-text">
                      <Link to="/small-bags-and-belt-bags">
                        Small Bags and Belt Bags
                      </Link>
                    </p>
                    <p className="subtitle-text">
                      <Link to="/sneakers">Sneakers</Link>
                    </p>
                  </div>
                </div>
                <div className="magazine">
                  <p className="title-text mt-4">MAGAZINE</p>
                  <div className="mt-5">
                    <div className="magazine-item">
                      <img height="120px" src={Magazine} alt="Magazine" />
                      <div className="magazine-text">
                        <p className="magazine-title">
                          Men's Fall-winter 2024 Show
                        </p>
                        <p className="magazine-subtitle">
                          16/01 - Fashion Shows
                        </p>
                      </div>
                    </div>
                    <div className="magazine-item mt-5">
                      <img height="120px" src={Magazine1} alt="Magazine1" />
                      <div className="magazine-text">
                        <p className="magazine-title">
                          Men's Fall-winter 2024 Show
                        </p>
                        <p className="magazine-subtitle">
                          16/01 - Fashion Shows
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ display: "flex" }}>
                  <div className="vertical-line"></div>
                  <div className="products-box mt-5">
                    <p
                      className="title-text"
                      style={{ marginLeft: "65px", marginBottom: "50px" }}
                    >
                      PRODUCTS
                    </p>
                    <div className="product-grid">
                      <div className="product-item">
                        <img src={Product1} alt="Product 1" />
                        <p className="product-title">Side Trunk PM</p>
                      </div>

                      <div className="product-item">
                        <img src={Product2} alt="Product 1" />
                        <p className="product-title">Multiple Wallet</p>
                      </div>
                      <div className="product-item">
                        <img src={Product2} alt="Product 1" />
                        <p className="product-title">Multiple Wallet</p>
                      </div>
                      <div className="product-item">
                        <img src={Product1} alt="Product 1" />
                        <p className="product-title">Side Trunk PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Search;
