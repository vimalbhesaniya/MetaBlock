import React, { useContext, useEffect, useRef, useState } from "react";
import "./home.css";
import Button from "../../Components/Button";
import cryptoImage from "../../assets/staking.png";
import RoadMap from "../../Components/RoadMap";
import Chart from "../../Components/Chart";
import ProfileCard from "../../Components/ProfileCard";
import ProductCard from "../../Components/ProductCard";
import PartNers from "../../Components/PartNers";
import { Navigater } from "../../App";
import useIntersectionObserver from "../../Hooks/useIntersectionObserver";
import Card from "../../Components/Card";
import one from "../../Components/Images/onee.png"
import oneFlip from "../../Components/Images/oneFlip.png"
import two from "../../Components/Images/two.png"
import twoFlip from "../../Components/Images/twoFlip.png"
import three from "../../Components/Images/three.png"
import threeFlip from "../../Components/Images/threeFlip.webp"
import four from "../../Components/Images/four.webp"
import fourFlip from "../../Components/Images/fourFlip.png"
import five from "../../Components/Images/five.png"
import fiveFlip from "../../Components/Images/fiveFlip.png"
import AOS from "aos"
const Home = () => {
    const [s1, s2, s3, s4, s5] = useContext(Navigater);
    useEffect(()=>{
        AOS.init({duration:2000});
    } , [])
    return (
        <>
            <section ref={s1} className="introSection">
                <div className="contentContainer">
                    <h4 className="introTitle">INTRODUCING</h4>
                    <h1 className="introHeading">MetaBlock</h1>
                    <p className="introDescription ">
                        "Horixon " is an expansive gaming metaverse that
                        seamlessly integrates augmented reality (AR), virtual
                        reality (VR), and artificial intelligence (AI) to create
                        a dynamic and interconnected gaming experience. This
                        metaverse offers a variety of games, including a
                        cutting-edge casino district, alongside other engaging
                        experiences.
                    </p>
                    <div className="buttonContainer">
                        <Button Text={"INVEST"} />
                        <Button Text={"STAKE"} />
                    </div>
                </div>
                <video
                    width="600"
                    autoPlay
                    loop
                    muted
                    className="introductionVideo"
                >
                    <source src="Videos/crypto.mp4" type="video/mp4" />
                </video>
            </section>

            <section className="aboutSection ">
                <div className="aboutLeft">
                    <div className="bluryDiv1"></div>
                    <div className="bluryDiv2"></div>
                    <video
                        width="600"
                        autoPlay
                        loop
                        muted
                        className="aboutVideo"
                    >
                        <source
                            src="Videos/surfer-7rYpoIub.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                {(
                    <div className="aboutRight">
                        <p className="font aboutTitle">MetaBlock</p>
                        <h1 className="aboutHeading mt-3">
                            Revolutionizes Arbitrage With Decentralized Flash
                            Loans And Innovative Staking Opportunities
                        </h1>
                        <p className="aboutDescription mt-3 paraFont">
                            Embark on a journey through cutting-edge technology
                            with Horixon. In a world where artificial
                            intelligence, blockchain, and virtual reality
                            converge, we redefine the digital landscape. Dive
                            into futuristic metaverse casinos powered by AI on
                            the blockchain, exploring a realm where innovation
                            meets entertainment. Join us on a transformative
                            exploration of the metaverse, where modern ideas
                            shape the future of technology, gaming, and digital
                            experiences.
                        </p>
                        <Button Text={"EXPLORE"}></Button>
                    </div>
                )}
            </section>

            <section className="realitySection appContainer">
                {(
                    <>
                        <p className="realityTitle" data-aos='zoom-in-up'>
                            ENDLESS REALITY
                        </p>
                        <p className="realityHeading" data-aos='zoom-in-up'>
                            ECOSYSTEM
                        </p>
                    </>
                )}
            </section>
            <section className="appContainer stakeSection">
                <div className="position-relative stakeLeft">
                    <img src={cryptoImage} className="img-fluid w-100" alt="" />
                    <div className="bluryDiv1"></div>
                </div>
                <div className="stakeRight" >
                    <h1 className="stakHeading" data-aos="fade-left">Staking</h1>

                    <div>
                        {(
                            <>
                                <h3 className="subHeading" data-aos="fade-left">
                                    Alien Auras
                                </h3>
                                <p className="paraFont subDesc" data-aos="fade-left">
                                    Alien Auras is the dynamic world of
                                    cryptocurrency. Its futuristic design
                                    captures the essence of digital innovation
                                    and technological advancement for
                                    crypto-related projects seeking a bold and
                                    forward-thinking aesthetic.
                                </p>
                            </>
                        )}
                    </div>

                    <div>
                        {(
                            <>
                                <h3 className="subHeading" data-aos="fade-left">
                                    Flash Loan Arbitrage Bot
                                </h3>
                                <p className="font subDesc" data-aos="fade-left" >
                                    Leverage Flash Loan Arbitrage Bot for rapid
                                    and lucrative trading by exploiting price
                                    variations across decentralized finance
                                    platforms.
                                </p>
                            </>
                        )}
                    </div>

                    <div>
                        <>
                            <h3 className="subHeading" data-aos="fade-left">
                                NFT Staking
                            </h3>
                            <p className="font subDesc" data-aos="fade-left">
                                Engage in NFT Staking to earn passive income
                                and unlock rewards, enhancing the value and
                                utility of your digital assets within the
                                blockchain ecosystem.
                            </p>
                        </>
                    </div>

                    <div>
                        {(
                            <>
                                <h3 className="subHeading" data-aos="fade-left">
                                    Aura Finance
                                </h3>
                                <p className="font subDesc" data-aos="fade-left">
                                    Access Aura Finance for comprehensive
                                    financial solutions, including lending,
                                    borrowing, and yield farming, facilitated by
                                    cutting-edge blockchain technology.
                                </p>
                            </>
                        )}
                    </div>

                    <div>
                        {(
                            <>
                                <h3 className="subHeading">
                                    Aura Wallet
                                </h3>
                                <p className="font subDesc">
                                    Securely manage your cryptocurrency assets
                                    with Aura Wallet, offering a user-friendly
                                    interface and advanced security features for
                                    convenient storage and transactions.
                                </p>
                            </>
                        )}
                    </div>

                    <div>
                        {(
                            <>
                                <h3 className="subHeading">
                                    Alien Aura Battle Game
                                </h3>
                                <p className="font subDesc">
                                    Experience thrilling gameplay in the Alien
                                    Aura Battle Game, where players engage in
                                    strategic battles and earn rewards using
                                    blockchain technology.
                                </p>
                            </>
                        )}
                    </div>

                    <div>
                        {(
                            <>
                                <h3 className="subHeading">
                                    Aura Chain
                                </h3>
                                <p className="font subDesc">
                                    Discover Aura Chain, a high-performance
                                    blockchain network designed for scalability,
                                    security, and interoperability, enabling
                                    seamless transactions and decentralized
                                    applications.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <section
                className="roadMapContainer appContainer"
                ref={s3}
                id="roadmap"
            >
                <h1 className="roadMapHeading text-center">Our RoadMap</h1>
                <RoadMap key={"roadMap"} />
            </section>
            <section className="chartContainer appContainer">
                <h1 className="roadMapHeading text-center">TOKENOMICS</h1>
                <Chart />
            </section>
            <section className="appContainer">
                <h1 className="roadMapHeading text-center my-5">
                    Latest Blogs
                </h1>
                <p className="paraFont text-center">
                    Explore the limitless possibilities of the metaverse and
                    dive into the exciting world of cryptocurrency with our
                    latest <br /> blog posts. Stay updated on the latest trends,
                    insights, and innovations in these rapidly evolving realms.
                </p>
                <div className="productContainer flex-wrap my-5 gap-3">
                    <ProductCard></ProductCard>
                </div>
            </section>

            <section className="featuresContainer appContainer">
                <div className="featureLeft">
                    <Card customClass={"card3d"}
                        FrontPath={one}
                        BackPath={oneFlip}
                    />
                    <Card
                        customClass={'card3d'}
                        FrontPath={two}
                        BackPath={twoFlip}
                    />
                </div>
                <div className="featureCenter">
                    <Card
                        customClass={"card3dcenter"}
                        FrontPath={three}
                        BackPath={threeFlip}
                    />
                </div>
                <div className="featureRight">
                    <Card
                        customClass={"card3d"}
                        FrontPath={four}
                        BackPath={fourFlip}
                    />
                    <Card
                        customClass={"card3d"}
                        FrontPath={five}
                        BackPath={fiveFlip}
                    />
                </div>
            </section>
            <section className="roadMapContainer appContainer" ref={s4}>
                <h1 className="roadMapHeading text-center">PARTNERS</h1>
                <PartNers />
            </section>
            <section className="roadMapContainer appContainer">
                <h1 className="roadMapHeading text-center">PARTNERS</h1>
                <PartNers />
            </section>
            <div className="container-fluid my-5">
                <div className="line">
                    <ProfileCard></ProfileCard>
                </div>
            </div>
        </>
    );
};

export default Home;
