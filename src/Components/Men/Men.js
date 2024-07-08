import React, { useState } from 'react';
import Navbar from "../NavBar/NavBar";
import Banner1 from './../../Assets/Images/Banner/Banner 1.png';
import Footer from "../Footer/footer";
import HeaderText from './HeaderText';
import Filter from './Filter';
import AddCart from './AddCart';
import C1P4 from './../../Assets/Images/Product Image/Product Section1-4.png';
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import C2P4 from "../../Assets/Images/Product Image/Product Section2-4.png";
import CategorySlider from './CategorySlider';



function Men() {
    const [sort, setSort] = useState('');
    const cardData = [
        { imgSrc: C1P4, title: "TrueBrowns  Grey Cotton Coat", link: "#", price: "3799" },
        { imgSrc: C1P4, title: "TrueBrowns  Grey Cotton Coat", link: "#", price: "3799" },
        { imgSrc: C1P4, title: "TrueBrowns  Grey Cotton Coat", link: "#", price: "3799" },
        { imgSrc: C1P4, title: "TrueBrowns  Grey Cotton Coat", link: "#", price: "3799" },
        { imgSrc: C1P4, title: "TrueBrowns  Grey Cotton Coat", link: "#", price: "3799" },
        { imgSrc: C1P4, title: "TrueBrowns  Grey Cotton Coat", link: "#", price: "3799" },
        { imgSrc: C1P4, title: "TrueBrowns  Grey Cotton Coat", link: "#", price: "3799" },
        { imgSrc: C1P4, title: "TrueBrowns  Grey Cotton Coat", link: "#", price: "3799" },
        // ... (rest of the cardData)
    ];
    const recentView = [
        { imgSrc: C2P1, title: "Women", link: "#", price: "3799" },
        { imgSrc: C2P2, title: "Men", link: "#", price: "3799" },
        { imgSrc: C2P3, title: "Unisex", link: "#", price: "3799" },
        { imgSrc: C2P4, title: "View more", link: "#" },
    ];
    const categories = [
        { imgSrc: C1P4, title: "Category 1", link: "#", },
        { imgSrc: C1P4, title: "Category 2", link: "#", },
        { imgSrc: C1P4, title: "Category 3", link: "#",  },
        { imgSrc: C1P4, title: "Category 4", link: "#",  },
    ];

    return (
        <>
            <Navbar />
            <div className="home-container">
                <img className="temp-image1" style={{ height: "91%" }} src={Banner1} alt="Avant Divine" />
            </div>
            <div className='mt-3 mt-lg-5'>
                <HeaderText text="Mens" />
            </div>
            <div className='container-fluid men-section-padding mb-lg-3'>
                <div class="filter-sort-btn mb-lg-3">
                    <div class="row">
                        <div class="col-6 col-md-auto mb-2">
                            <Filter />
                        </div>
                        <div class="col-6 col-md-auto">
                            <select class="filter-btn sort-dropdown" value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="default">Sort By</option>
                                <option value="name">Name</option>
                                <option value="date">Date</option>
                                <option value="price">Price</option>
                            </select>
                        </div>npm install @fortawesome/fontawesome-free

                    </div>
                </div>
                <div className="row">
                    {cardData.map((card, index) => (
                        <div className="col-md-3 col-6 mb-lg-4 mb-3" key={index} style={{ cursor: "pointer" }}>
                            <img
                                className="trendsetters-image"
                                src={card.imgSrc}
                                alt={card.title}
                            />
                            <p className="card-title">{card.title}</p>
                            <p className="card-title">₹{card.price}</p>
                            <select className="filter-btn sort-dropdown" style={{ paddingLeft: "10px", marginTop: "10px" }} value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="default">Select Size</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <AddCart />
                        </div>
                    ))}
                </div>
            </div>
            <HeaderText text="Recently Viewed" />
            <div className='container-fluid men-section-padding mb-lg-5'>
                <div className="row">
                    {recentView.map((card, index) => (
                        <div className="col-md-3 col-6" key={index}>
                            <div style={{ cursor: "pointer" }}>
                                <img
                                    className="trendsetters-image"
                                    src={card.imgSrc}
                                    alt={card.title}
                                />
                                <p className="card-title">{card.title}</p>
                                <p className="card-title">₹{card.price}</p>
                                <select className="filter-btn sort-dropdown" style={{ paddingLeft: "10px", marginTop: "10px" }} value={sort} onChange={(e) => setSort(e.target.value)}>
                                    <option value="default">Select Size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                                <AddCart />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <HeaderText text="Category" />
            <div className='container-fluid men-section-padding mb-lg-5'>
                <div className="row">
                    {categories.map((card, index) => (
                        <div className="col-md-3 col-6" key={index}>
                            <div style={{ cursor: "pointer" }}>
                                <img
                                    className="trendsetters-image"
                                    src={card.imgSrc}
                                    alt={card.title}
                                />
                                <p className="card-title">{card.title}</p>
                                <p className="card-title">₹{card.price}</p>
                                <select className="filter-btn sort-dropdown" style={{ paddingLeft: "10px", marginTop: "10px" }} value={sort} onChange={(e) => setSort(e.target.value)}>
                                    <option value="default">Select Size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                                <AddCart />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Men