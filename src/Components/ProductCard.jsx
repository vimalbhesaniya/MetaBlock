import React, { useState } from "react";
import card_img1 from "../assets/img/card_img1.webp";
import card_img2 from "../assets/img/card_img2.webp";
import card_img3 from "../assets/img/card_img3.webp";
import card_img4 from "../assets/img/card_img4.webp";
import card_img5 from "../assets/img/card_img5.webp";
import card_img6 from "../assets/img/card_img6.webp";
import "../App.css";

const ProductCard = () => {
    const [cardData, setcardData] = useState([
        {
            img: card_img1,
            title: "Navigating the Horizons of Horixon: A Journey Through Virtual Realms",
            para: "Metasurfer is an expansive gaming metaverse that seamlessly integrates augmented reality (AR), virtual...",
        },
        {
            img: card_img2,
            title: "Horixon’s Surge: Unveiling Token Value Amidst DeFi Waves and BTC ETF Approval",
            para: "Horixon stands at the crossroads of artificial intelligence (AI), blockchain, and virtual reality (VR)...",
        },
        {
            img: card_img3,
            title: "“Navigating Virtual Collaboration: Horixon’s VR Meeting Spaces”",
            para: "In the evolving landscape of remote collaboration, Horixon emerges as a pioneer, reshaping...",
        },
        {
            img: card_img4,
            title: "Horixon’s VR Time Travel Chronicles: A Futuristic Odyssey through History",
            para: "Horixon’s VR time travel applications transcend the boundaries of the present, immersing users ...",
        },
        {
            img: card_img5,
            title: "Horixon’s Gamified Prosperity: Dual Rewards in the Metaverse Casinos",
            para: "Horixon’s metaverse casinos function with their own native tokens...",
        },
        {
            img: card_img6,
            title: "HorizonXperience: Pioneering the Future of Gambling with AI-Powered Metaverse Casinos",
            para: "HorizonXperience’s metaverse casinos transcend the traditional gambling landscape....",
        },
    ]);
    return (
        <>
            {cardData?.map((val, ind) => {
                return (
                        <div key={ind} className="card-box">
                            <img alt="" className="img-fluid d-block card-img-top" src={val.img}></img>
                            <div className="card-body-box">
                                <h5>{val.title}</h5>
                                <p>{val.para}</p>
                            </div>
                        </div>
                    
                );
            })}
        </>
    );
};

export default ProductCard;
