import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CategorySlider.css';
import { NextArrow, PrevArrow } from './CustomArrows';
import { BiHeart } from 'react-icons/bi'; 

const CardSlider = ({ cards }) => {
    // State to manage favorite cards
    const [favorites, setFavorites] = useState([]);

    // Function to toggle favorite status
    const toggleFavorite = (index) => {
        // Check if card is already favorited
        if (favorites.includes(index)) {
            // Remove from favorites
            setFavorites(favorites.filter((item) => item !== index));
        } else {
            // Add to favorites
            setFavorites([...favorites, index]);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={index} className="slider-card">
                    {/* Make only the image clickable */}
                    <div style={{ cursor: "pointer", position: 'relative' }}>
                        {/* Favorite Button */}
                        <div className="favorite-button" onClick={() => toggleFavorite(index)}>
                            <BiHeart
                                className="bi bi-heart"
                                style={{
                                    fontSize: '30px',
                                    color: favorites.includes(index) ? 'red' : 'black',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease'
                                }}
                            />
                        </div>
                        {/* Card Image and Title */}
                        <img
                            className="trendsetters-image"
                            src={card.imgSrc}
                            alt={card.title}
                            onClick={() => window.location.href = card.link}
                        />
                        <h5 className="card-title">{card.title}</h5>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CardSlider;
