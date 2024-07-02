import React, { useState } from 'react';
import Navbar from "../NavBar/NavBar";
import Banner1 from './../../Assets/Images/Banner/Banner 1.png';
import Footer from "../Footer/footer";
import HeaderText from './HeaderText';
import Filter from './Filter';
import C1P4 from './../../Assets/Images/Product Image/Product Section1-4.png';
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import C2P4 from "../../Assets/Images/Product Image/Product Section2-4.png";
import CategorySlider from './CategorySlider';



function Men() {
    const [sort, setSort] = useState('');
    const cardData = [
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
    const recentView = [
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

    return (
        <>
            <Navbar />
            <div className="home-container">
                <img className="temp-image1" style={{ height: "91%" }} src={Banner1} alt="Avant Divine" />
            </div>
            <div className=' p-1'>
                <HeaderText text="Mens" />
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-1 col-lg-1">
                            <Filter />
                        </div>
                        <div className='col-6 col-md-2 col-lg-2'>
                            <div className=" d-flex align-items-center">
                                <p className="mb-2" style={{ marginRight: "10px", marginLeft: "30px" }}>Sort By :</p>
                                <select className="mb-2 p-2" value={sort} onChange={(e) => setSort(e.target.value)}>
                                    <option value="">Sort By</option>
                                    <option value="sort1">High to Low</option>
                                    <option value="sort2">Low to High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-lg-5 mt-3 ">
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
                <div style={{ marginTop: "-40px" }}>
                    <HeaderText text="Recently Viewed" />
                </div>
                <div className=" container-fluid mt-lg-5 mt-3 ">
                    <div className="row">
                        {recentView.map((card, index) => (
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
                <div style={{ marginTop: "-40px", marginBottom: "60px" }}>
                    <HeaderText text="Categories" />
                </div>
                <div className='mb-5'>
                    <CategorySlider cards={categories} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Men