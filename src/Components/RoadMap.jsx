import React, { useState } from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        name: `PHASE 1`,
        review: `Empowering Tokenization with Seamless Web 3 Connectivity`,
        year: 2024,
    },
    {
        name: `PHASE 2`,
        review: `Secure, Stake, and Earn: Powering Your Metaverse Journey.`,
        year: 2024,
    },
    {
        name: `PHASE 3`,
        review: `Step into the Future: AR/VR Casino Gaming Redefined.`,
        year: 2025,
    },
    {
        name: `PHASE 4`,
        review: `Crafting Boundless Worlds: Your Complete Metaverse Game Ecosystem Awaits`,
        year: 2025,
    },
    {
        name: `PHASE 5`,
        review: `In house blockchain for HoriXverse`,
        year: 2026,
    },
];

const RoadMap = () => {
    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1267,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="containerFluid pt-5">
                <div className="buttonContainerForPhases">
                    <button
                        className="sliderHandler"
                        onClick={() => sliderRef?.slickPrev()}
                    >
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <button
                        className="sliderHandler"
                        onClick={() => sliderRef?.slickNext()}
                    >
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </div>
                <div className="mt-5 mainPhaseContainer">
                    <Slider {...sliderSettings} ref={setSliderRef}>
                        {data.map(({ name, review , year }) => (
                            <>
                                <div className="adjustCards">
                                    <div className="cardMainContainer">
                                        <div className="phaseLineContainer">
                                            <div className="phaseYear">
                                                {year}
                                            </div>
                                            <div className="phaseLine"></div>
                                            <div className="roundPhaseIcon">
                                                {" "}
                                                <div className="innerRound"></div>{" "}
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card__border"></div>
                                            <div className="card_title__container">
                                                <h1 className="card_title">
                                                    {name}
                                                </h1>
                                                <p className="card_paragraph">
                                                    {review}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default RoadMap;
