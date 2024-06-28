import React, { useState } from "react";
import "./Home.css";
import HomeVideo from "../../Assets/Images/home-video.mp4";
import MenCloths from "../../Assets/Images/men-cloths.mp4";
import ThirdVideo from "../../Assets/Images/third-video.mp4";
import Banner1 from './../../Assets/Images/Banner/Banner 1.png';
import Banner2 from './../../Assets/Images/Banner/Banner 2.png';
import Banner3 from './../../Assets/Images/Banner/Banner 3.png';
import Poster from "../../Assets/Images/poster.png";
import C1P1 from "../../Assets/Images/Product Image/Product Section1-1.png";
import C1P2 from "../../Assets/Images/Product Image/Product Section1-2.png";
import C1P3 from "../../Assets/Images/Product Image/Product Section1-3.png";
import C1P4 from "../../Assets/Images/Product Image/Product Section1-4.png";
import C1P5 from "../../Assets/Images/Product Image/Product Section1-5.png";
import C1P6 from "../../Assets/Images/Product Image/Product Section1-6.png";
import C1P7 from "../../Assets/Images/Product Image/Product Section1-7.png";
import C1P8 from "../../Assets/Images/Product Image/Product Section1-8.png";
import C4P1 from "../../Assets/Images/Last Section Images/Last Section Image 1.png";
import C4P2 from "../../Assets/Images/Last Section Images/Last Section Image 2.png";
import C4P3 from "../../Assets/Images/Last Section Images/Last Section Image 3.png";
import C3P1 from "../../Assets/Images/Product Image/Product Section3-1.png";
import C3P2 from "../../Assets/Images/Product Image/Product Section3-2.png";
import C3P3 from "../../Assets/Images/Product Image/Product Section3-3.png";
import C3P4 from "../../Assets/Images/Product Image/Product Section3-4.png";
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import C2P4 from "../../Assets/Images/Product Image/Product Section2-4.png";
import VideoPlayer from "../Home/Video";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/footer";

const cardData = [
  {
    imgSrc: C1P1,
    title: "Women",
    link: "#",
  },
  {
    imgSrc:C1P2,
    title: "Men",
    link: "#",
  },
  {
    imgSrc: C1P3,
    title: "Unisex",
    link: "#",
  },
  {
    imgSrc: C1P4,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: C1P5,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: C1P6,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: C1P7,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: C1P8,
    title: "View more",
    link: "#",
  },
];
const men = [
  {
    imgSrc: C2P1,
    title: "Women",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C2P2,
    title: "Men",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C2P3,
    title: "Unisex",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C2P4,
    title: "View more",
    link: "#",
  },
];
const athleisur = [
  {
    imgSrc: C3P1,
    title: "Women",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C3P2,
    title: "Men",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C3P3,
    title: "Unisex",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C3P4,
    title: "View more",
    link: "#",
  },
];

const trendsetters = [
  {
    imgSrc: C4P1,
    title: "Women",
    link: "#",
  },
  {
    imgSrc: C4P2,
    title: "Men",
    link: "#",
  },
  {
    imgSrc: C4P3,
    title: "Unisex",
    link: "#",
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
    console.log("Search Query:", searchQuery);
  };
  return (
    <>
      <Navbar />
      <div className="searchBar d-md-none d-block">
        <form onSubmit={handleSubmit}>
          <input
            id="searchQueryInput"
            type="text"
            name="searchQueryInput"
            placeholder="Search Avant Divine Iconic Products"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
            <svg style={{ height: "24px", width: "24px" }} viewBox="0 0 24 24">
              <path
                fill="#666666"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="home-container">
        {/* <video className="home-video" autoPlay loop muted>
          <source src={HomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div>
      <img className="temp-image1" src={Banner1} alt="Avant Divine" />
    </div>
        <div className="text-overlay d-none d-md-inline exclusive-text ">
          <h3 className=""> Avant Divine Couture</h3>
          <h5 className=" " style={{ textDecoration: "underline" }}>
            Explore the Intersection of Urban Style & Timeless Elegance
          </h5>
        </div>
      </div>
      <div className="top-header-content">
        <h1 className="text-center modern--class "> Discover The Modern Class</h1>
        {/* <div className="p-lg-5">
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-md-3 col-6 mb-5" key={index}>
                <a href={card.link} className="card-link">
                  <div className="" style={{ cursor: "pointer" }}>
                    <img
                      className="card-image"
                      src={card.imgSrc}
                      alt={card.title}
                    />
                    <h5 className="card-title">{card.title}</h5>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div> */}

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
      </div>
      <div>
        <div className="text-center-discover">
          <h1 className="bold--text">Bold Statement</h1>
          <a className=" discover-more" href="">
            Discover More
          </a>
        </div>
        {/* <VideoPlayer videoSrc={MenCloths} />; */}
        <div>
      <img className="temp-image" src={Banner2} alt="Avant Divine" />
    </div>
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
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            <img className="img-poster" src={Poster} />
          </div>
          <div className="col-md-6 col-12">
            <div className="poster-text">
              <h2 className="text-center bold--text1">
                INSPIRED BY THE VIBRANT WORLD OF STREET ART
              </h2>
              <h6 className="text-center font--text"> For The Modern Urbane On The Go</h6>
              <a className="discover-more" href="">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center-discover">
        <h1 className="bold--text">Athleisure Vibes</h1>
        <a className="discover-more" href="">
          Discover More
        </a>
      </div>
      {/* <VideoPlayer videoSrc={ThirdVideo} />; */}
      <div>
      <img className="temp-image" src={Banner3} alt="Avant Divine" />
    </div>

      <div className="mt-lg-5 mt-3 trendsetters-box">
          <div className="row">
            {athleisur.map((card, index) => (
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
      <div>
        <h2 className="text-center bold--text">Exclusive Limited Edition Drops</h2>
        <h6 className="text-center font--text">
          {" "}
          A Must Have For Colectors & Trendsetters Alike
        </h6>
        <div className="mt-lg-5 mt-3 trendsetters-box">
          <div className="row">
            {trendsetters.map((card, index) => (
              <div className="col-md-4 col-12 mb-5" key={index}>
                <a href={card.link} className="card-link">
                  <div style={{ cursor: "pointer" }}>
                    <img
                      className="trendsetters-image"
                      src={card.imgSrc}
                      alt={card.title}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center-discover mb-5">
        <a className="discover-more" href="">
          Discover More
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Home;
