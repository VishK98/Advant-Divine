import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/footer';
import SectionHeader from '../Mens/SectionHeader';
import FilterSort from '../Mens/FilterSort';
import Banner1 from './../../Assets/Images/Banner/Banner 1.png';
import C1P4 from './../../Assets/Images/Product Image/Product Section1-4.png';
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import C2P4 from "../../Assets/Images/Product Image/Product Section2-4.png";
import './Mens.css';
import CardSlider from './CardSlider';

const cardData = [
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  { imgSrc: C1P4, title: "View more", link: "#" },
  // ... (rest of the cardData)
];

const men = [
  { imgSrc: C2P1, title: "Women", amount: "Rs. 3000", link: "#" },
  { imgSrc: C2P2, title: "Men", amount: "Rs. 3000", link: "#" },
  { imgSrc: C2P3, title: "Unisex", amount: "Rs. 3000", link: "#" },
  { imgSrc: C2P4, title: "View more", link: "#" },
];

const categories = [
  { imgSrc: C1P4, title: "Category 1", link: "#" },
  { imgSrc: C1P4, title: "Category 2", link: "#" },
  { imgSrc: C1P4, title: "Category 3", link: "#" },
  { imgSrc: C1P4, title: "Category 4", link: "#" },
  { imgSrc: C1P4, title: "Category 5", link: "#" },
  // Add more categories as needed
];

const Mens = () => {
  return (
    <div>
      <Navbar />
      <div className="Mens-Banner">
        <img src={Banner1} alt="Avant Divine" />
      </div>
      <SectionHeader text="Mens" />
      <FilterSort />
      <div className="mt-lg-5 mt-3 trendsetters-box">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-3 col-6 mb-5" key={index}>
              <a href={card.link} className="card-link">
                <div style={{ cursor: "pointer" }}>
                  <img
                    className="trendsetters-image"
                    src={card.imgSrc}
                    alt={card.title}
                  />
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <SectionHeader text="Recently Viewed" />
      <div className="mt-lg-5 mt-3 trendsetters-box">
        <div className="row">
          {men.map((card, index) => (
            <div className="col-md-3 col-6 mb-5" key={index}>
              <a href={card.link} className="card-link">
                <div style={{ cursor: "pointer" }}>
                  <img
                    className="trendsetters-image"
                    src={card.imgSrc}
                    alt={card.title}
                  />
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <SectionHeader text="Categories" />
      <div className="mt-lg-5 mt-3 trendsetters-box">
        <CardSlider cards={categories} />
      </div>
      <Footer />
    </div>
  );
};

export default Mens;
