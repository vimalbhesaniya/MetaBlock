import React, { useState } from 'react';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import svg1 from "./SVG/1.svg"
import svg2 from "./SVG/2.svg"
import svg3 from "./SVG/3.svg"
import svg4 from "./SVG/4.svg"
import svg5 from "./SVG/5.svg"

const data = [
    svg1,
    svg2,
    svg3,
    svg4,
    svg5
];

const PartNers = () => {
    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1267,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className='container-fluid pt-5'>
                    <Slider {...sliderSettings} ref={setSliderRef}>
                        {data.map((img , i) => (
                                    <div key={i}  className='cardMainContainer h-100'>
                                        <img src={img} className='img-fluid' alt="" />
                                    </div>
                        ))}
                    </Slider>
                
            </div>
        </>
    );
};

export default PartNers;
