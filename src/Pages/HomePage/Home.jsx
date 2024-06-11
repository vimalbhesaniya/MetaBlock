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

const Home = () => {
    const [s1, s2, s3, s4, s5] = useContext(Navigater);
    const [first, isVisible1] = useIntersectionObserver({
        threshold: 0.1,
    });
    const [second, isVisible2] = useIntersectionObserver({
        threshold: 0.1,
    });
    const [third, isVisible3] = useIntersectionObserver({
        threshold: 0.2,
    });
    const [fourth, isVisible4] = useIntersectionObserver({
        threshold: 0.1,
    });
    const [ref1, isVisible_1] = useIntersectionObserver({ threshold: 0.1 });
    const [ref2, isVisible_2] = useIntersectionObserver({ threshold: 0.1 });
    const [ref3, isVisible_3] = useIntersectionObserver({ threshold: 0.2 });
    const [ref4, isVisible_4] = useIntersectionObserver({ threshold: 0.1 });
    const [ref5, isVisible_5] = useIntersectionObserver({ threshold: 0.1 });
    const [ref6, isVisible_6] = useIntersectionObserver({ threshold: 0.1 });
    const [ref7, isVisible_7] = useIntersectionObserver({ threshold: 0.1 });
    const [ref8, isVisible_8] = useIntersectionObserver({ threshold: 0.1 });
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

            <section className="aboutSection " ref={first}>
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
                {isVisible1 && (
                    <div className="aboutRight animate__animated  animate__fadeInRight">
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

            <section className="realitySection appContainer" ref={second}>
                {isVisible2 && (
                    <>
                        <p className="realityTitle animate__animated animate__zoomIn">
                            ENDLESS REALITY
                        </p>
                        <p className="realityHeading animate__animated animate__zoomIn">
                            ECOSYSTEM
                        </p>
                    </>
                )}
            </section>
            <section className="appContainer stakeSection" ref={s2}>
                <div className="position-relative stakeLeft">
                    <img src={cryptoImage} className="img-fluid w-100" alt="" />
                    <div className="bluryDiv1"></div>
                </div>
                <div className="stakeRight">
                    <h1 className="stakHeading">Staking</h1>

                    <div ref={ref1}>
                        {isVisible_1 && (
                            <>
                                <h3 className="subHeading animate__animated animate__fadeInRight animate__delay-1s">
                                    Alien Auras
                                </h3>
                                <p className="paraFont subDesc animate__delay-2s animate__animated animate__fadeInRight">
                                    Alien Auras is the dynamic world of cryptocurrency. Its futuristic design
                                    captures the essence of digital innovation and technological advancement for
                                    crypto-related projects seeking a bold and forward-thinking aesthetic.
                                </p>
                            </>
                        )}
                    </div>

                    <div ref={ref2}>
                        {isVisible_2 && (
                            <>
                                <h3 className="subHeading animate__animated animate__fadeInRight animate__delay-1s">
                                    Flash Loan Arbitrage Bot
                                </h3>
                                <p className="font subDesc animate__delay-2s animate__animated animate__fadeInRight">
                                    Leverage Flash Loan Arbitrage Bot for rapid and lucrative trading by exploiting price variations
                                    across decentralized finance platforms.
                                </p>
                            </>
                        )}
                    </div>

                    <div ref={ref3}>
                        {isVisible_3 && (
                            <>
                                <h3 className="subHeading animate__animated animate__fadeInRight animate__delay-1s">
                                    NFT Staking
                                </h3>
                                <p className="font subDesc animate__delay-2s animate__animated animate__fadeInRight">
                                    Engage in NFT Staking to earn passive income and unlock rewards, enhancing the value and utility of
                                    your digital assets within the blockchain ecosystem.
                                </p>
                            </>
                        )}
                    </div>

                    <div ref={ref4}>
                        {isVisible_4 && (
                            <>
                                <h3 className="subHeading animate__animated animate__fadeInRight animate__delay-1s">
                                    Aura Finance
                                </h3>
                                <p className="font subDesc animate__delay-2s animate__animated animate__fadeInRight">
                                    Access Aura Finance for comprehensive financial solutions, including lending, borrowing, and yield
                                    farming, facilitated by cutting-edge blockchain technology.
                                </p>
                            </>
                        )}
                    </div>

                    <div ref={ref5}>
                        {isVisible_5 && (
                            <>
                                <h3 className="subHeading animate__animated animate__fadeInRight animate__delay-1s">
                                    Aura Wallet
                                </h3>
                                <p className="font subDesc animate__delay-2s animate__animated animate__fadeInRight">
                                    Securely manage your cryptocurrency assets with Aura Wallet, offering a user-friendly interface and
                                    advanced security features for convenient storage and transactions.
                                </p>
                            </>
                        )}
                    </div>

                    <div ref={ref6}>
                        {isVisible_6 && (
                            <>
                                <h3 className="subHeading animate__animated animate__fadeInRight animate__delay-1s">
                                    Alien Aura Battle Game
                                </h3>
                                <p className="font subDesc animate__delay-2s animate__animated animate__fadeInRight">
                                    Experience thrilling gameplay in the Alien Aura Battle Game, where players engage in strategic
                                    battles and earn rewards using blockchain technology.
                                </p>
                            </>
                        )}
                    </div>

                    <div ref={ref7}>
                        {isVisible_7 && (
                            <>
                                <h3 className="subHeading animate__animated animate__fadeInRight animate__delay-1s">
                                    Aura Chain
                                </h3>
                                <p className="font subDesc animate__delay-2s animate__animated animate__fadeInRight">
                                    Discover Aura Chain, a high-performance blockchain network designed for scalability, security, and
                                    interoperability, enabling seamless transactions and decentralized applications.
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

                <div className="productContainer flex-wrap my-5 gap-3">
                    <ProductCard></ProductCard>
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
