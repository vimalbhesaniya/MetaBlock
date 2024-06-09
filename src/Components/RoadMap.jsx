// import React, { useState } from 'react';
// import './style.css'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import round from "../assets/round.webp"


// const data = [
//     {
//         name: `PHASE 1`,
//         review: `Empowering Tokenization with Seamless Web 3 Connectivity`
//     },
//     {
//         name: `PHASE 2`,
//         review: `Secure, Stake, and Earn: Powering Your Metaverse Journey.`
//     },
//     {
//         name: `PHASE 3`,
//         review: `Step into the Future: AR/VR Casino Gaming Redefined.`
//     },
//     {
//         name: `PHASE 4`,
//         review: `Crafting Boundless Worlds: Your Complete Metaverse Game Ecosystem Awaits`
//     },
//     {
//         name: `PHASE 5`,
//         review: `In house blockchain for HoriXverse`
//     },
//     {
//         name: `PHASE 6`,
//         review: `Coming soon on metaverse markets like metastore`
//     },

// ];


// const RoadMap = () => {

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,

//     };

//     const [sliderRef, setSliderRef] = useState(null)
//     const sliderSettings = {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: false,
//         arrows: false,
//     }
//     return (
//         <>
//             <div className='containerFluid'>
//                 <button onCLick={sliderRef?.slickPrev}>
//                     left
//                 </button>
//                 <button onCLick={sliderRef?.slickNext}>
//                     right
//                 </button>
//                 <Slider ref={setSliderRef} {...sliderSettings}>
//                     {data.map((card, index) => (
//                         <div key={index}>
//                             <h2>{card.name}</h2>
//                             <p>{card.review}</p>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//             <div className='containerFluid pt-5'>
//                 <div className="mt-5 mainPhaseContainer">
//                     <Slider {...settings} >
//                         {data.map((d) => (
//                             <>
//                                 <div className='cardContainer'>
//                                         <div className='phaseLineContainer'>
//                                             <div className='phaseYear'>2024</div>
//                                             <div className='phaseLine'></div>
//                                             <div className='roundPhaseIcon'> <div className='innerRound'></div> </div>
//                                         </div>
//                                     <div key={d.name} className=" text-black rounded position-relative" >
//                                         <div className="d-flex flex-column customeBg mx-3  align-items-center justify-content-center gap-4 p-4">
//                                             <p className="h4 font-weight-bold">{d.name}</p>
//                                             <p className="text-center">{d.review}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>

//         </>
//     );
// }

// export default RoadMap;



import React, { useState } from 'react';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        name: `PHASE 1`,
        review: `Empowering Tokenization with Seamless Web 3 Connectivity`
    },
    {
        name: `PHASE 2`,
        review: `Secure, Stake, and Earn: Powering Your Metaverse Journey.`
    },
    {
        name: `PHASE 3`,
        review: `Step into the Future: AR/VR Casino Gaming Redefined.`
    },
    {
        name: `PHASE 4`,
        review: `Crafting Boundless Worlds: Your Complete Metaverse Game Ecosystem Awaits`
    },
    {
        name: `PHASE 5`,
        review: `In house blockchain for HoriXverse`
    },
    {
        name: `PHASE 6`,
        review: `Coming soon on metaverse markets like metastore`
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
            <div className='containerFluid pt-5'>
                <div className='buttonContainerForPhases'>
                    <button className='sliderHandler'  onClick={() => sliderRef?.slickPrev()}>
                    <i class="fa-solid fa-angles-left"></i>
                    </button>
                    <button className='sliderHandler' onClick={() => sliderRef?.slickNext()}>
                    <i class="fa-solid fa-angles-right"></i>
                    </button>
                </div>
                <div className="mt-5 mainPhaseContainer">
                    <Slider {...sliderSettings} ref={setSliderRef}>
                        {data.map((d) => (
                            <>
                                <div className='cardContainer'>
                                    <div className='phaseLineContainer'>
                                        <div className='phaseYear'>2024</div>
                                        <div className='phaseLine'></div>
                                        <div className='roundPhaseIcon'> <div className='innerRound'></div> </div>
                                    </div>
                                    <div key={d.name} className=" text-black rounded position-relative" >
                                        <div className="d-flex flex-column customeBg mx-3  align-items-center justify-content-center gap-4 p-4">
                                            <p className="h4 font-weight-bold">{d.name}</p>
                                            <p className="text-center">{d.review}</p>
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
