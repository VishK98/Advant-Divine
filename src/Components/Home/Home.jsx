import React, { useState } from "react";
import "./Home.css";
import HomeVideo from "../../Assets/Images/home-video.mp4";
import MenCloths from "../../Assets/Images/men-cloths.mp4";
import ThirdVideo from "../../Assets/Images/third-video.mp4";
import Poster from "../../Assets/Images/poster.png";
import LB from "../../Assets/Images/lb.png";
import Person from "../../Assets/Images/person.png";
import Women from "../../Assets/Images/women.png";
import Men from "../../Assets/Images/men.png";
import VideoPlayer from "../Home/Video";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/footer";

const cardData = [
  {
    imgSrc: LB,
    title: "Women",
    link: "#",
  },
  {
    imgSrc: LB,
    title: "Men",
    link: "#",
  },
  {
    imgSrc: LB,
    title: "Unisex",
    link: "#",
  },
  {
    imgSrc: LB,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: LB,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: LB,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: LB,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: LB,
    title: "View more",
    link: "#",
  },
];
const men = [
  {
    imgSrc: Men,
    title: "Women",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: Men,
    title: "Men",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: Men,
    title: "Unisex",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: Men,
    title: "View more",
    link: "#",
  },
];
const athleisur = [
  {
    imgSrc: Women,
    title: "Women",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: Women,
    title: "Men",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: Women,
    title: "Unisex",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: Women,
    title: "View more",
    link: "#",
  },
];

const trendsetters = [
  {
    imgSrc: Person,
    title: "Women",
    link: "#",
  },
  {
    imgSrc: Person,
    title: "Men",
    link: "#",
  },
  {
    imgSrc: Person,
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
        <video className="home-video" autoPlay loop muted>
          <source src={HomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay d-none d-md-inline">
          <h3> Avant Divine Couture</h3>
          <h5 style={{ textDecoration: "underline" }}>
            Explore the Intersection of Urban Style & Timeless Elegance
          </h5>
        </div>
      </div>
      <div>
        <h1 className="mt-lg-5 mt-3 text-center"> Discover The Modern Class</h1>
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
        <div className="text-center">
          <h1>Bold Statement</h1>
          <a className="discover-more" href="">
            Discover More
          </a>
        </div>
        {/* <VideoPlayer videoSrc={MenCloths} />; */}
        <div className="">
          <img className="temp-image"  src="https://media.gettyimages.com/id/515036734/photo/patna-bihar-state-india-finally-the-rains-indian-women-plant-rice-seedlings-in-a-flooded-bihar.jpg?s=612x612&w=gi&k=20&c=UzjqIKNDyrk-3OZXGOycg9Hg3yaXjh9nzz7QR3A6LaU=" />
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
            <img width="100%" height="90%" src={Poster} />
          </div>
          <div className="col-md-6 col-12">
            <div className="poster-text">
              <h2 className="text-center">
                INSPIRED BY THE VIBRANT WORLD OF STREET ART
              </h2>
              <h6 className="text-center"> For The Modern Urbane On The Go</h6>
              <a className="discover-more" href="">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1>Athleisure Vibes</h1>
        <a className="discover-more" href="">
          Discover More
        </a>
      </div>
      {/* <VideoPlayer videoSrc={ThirdVideo} />; */}
      <div className="">
        <img
          className="temp-image"
          src="https://media.gettyimages.com/id/515036734/photo/patna-bihar-state-india-finally-the-rains-indian-women-plant-rice-seedlings-in-a-flooded-bihar.jpg?s=612x612&w=gi&k=20&c=UzjqIKNDyrk-3OZXGOycg9Hg3yaXjh9nzz7QR3A6LaU="
        />
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
        <h2 className="text-center">Exclusive Limited Edition Drops</h2>
        <h6 className="text-center">
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
      <div className="text-center mb-5">
        <a className="discover-more" href="">
          Discover More
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Home;
