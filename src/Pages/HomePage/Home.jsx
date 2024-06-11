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
import svg1 from "../../Components/SVG/1.svg"
import svg2 from "../../Components/SVG/2.svg"
import svg3 from "../../Components/SVG/3.svg"
import svg4 from "../../Components/SVG/4.svg"
import svg5 from "../../Components/SVG/5.svg"
import svg6 from "../../Components/SVG/6.svg"
import svg7 from "../../Components/SVG/7.png"
import svg8 from "../../Components/SVG/8.svg"
import svg9 from "../../Components/SVG/9.png"
import svg10 from "../../Components/SVG/10.png"
import gif from "../../Components/SVG/gif.gif"

const Home = () => {
    const [s1, s2, s3, s4, s5] = useContext(Navigater);
    useEffect(() => {
        AOS.init({
            offset: 200,
            delay: 0,
            duration: 2000,
            easing: 'ease',
            once: true,
            mirror: false,

        });
    }, [])

    const data1 = [
        svg1,
        svg2,
        svg3,
        svg4,
        svg5
    ];
    const data2 = [
        svg6,
        svg7,
        svg8,
        svg9,
        svg10
    ]

    return (
        <>
            <section ref={s1} className="introSection">
                <div className="contentContainer">
                    <h4 className="introTitle" data-aos="zoom-in-up">INTRODUCING</h4>
                    <h1 className="introHeading" data-aos='zoom-in-up'>MetaBlock</h1>
                    <p className="introDescription">
                        "Horixon" is an expansive gaming metaverse that
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
                <div className="bluryDiv1" ></div>
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
                        <p className="font aboutTitle" data-aos="fade-left">MetaBlock</p>
                        <h1 className="aboutHeading mt-3" data-aos="fade-left">
                            Revolutionizes Arbitrage With Decentralized Flash
                            Loans And Innovative Staking Opportunities
                        </h1>
                        <p className="aboutDescription mt-3 paraFont" data-aos="fade-left">
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
                                <h3 className="subHeading" data-aos="fade-left">
                                    Aura Wallet
                                </h3>
                                <p className="font subDesc" data-aos="fade-left">
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
                                <h3 className="subHeading" data-aos="fade-left">
                                    Alien Aura Battle Game
                                </h3>
                                <p className="font subDesc" data-aos="fade-left">
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
                                <h3 className="subHeading" data-aos="fade-left">
                                    Aura Chain
                                </h3>
                                <p className="font subDesc" data-aos="fade-left">
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
                <h1 className="roadMapHeading text-center" data-aos="zoom-in-up">Our RoadMap</h1>
                <RoadMap key={"roadMap"} />
            </section>
            <section className="chartContainer appContainer">
                <h1 className="roadMapHeading text-center">TOKENOMICS</h1>
                <Chart />
            </section>

            <section className="featureHeader appContainer" ref={s5}>
                <div className="headerLeft">
                    <h5 className="header5 " data-aos='fade-right'> FEATURES IN</h5>

                    <h2 className="header2" data-aos='fade-right'> METABLOCK</h2>
                </div>
                <div className="headerRight">
                    <h2 className="rightHeader aboutHeading" data-aos='fade-left'>Navigating Tomorrow's Digital Frontiers with Versatile Solutions</h2>
                    <p className="rightPara" data-aos='fade-left'>Explore Horixon, a multifaceted venture spearheading the future of technology. From immersive travel in Horixpanse to thrilling bets in Horixbet, groundbreaking innovation awaits. Join us on this transformative journey through the metaverse and beyond.
                    </p>
                </div>
            </section>

            <section className="featuresContainer appContainer">
                <div className="featureLeft">
                    <Card customClass={"card3d"}
                        FrontPath={one}
                        BackPath={oneFlip}
                        FrontText={`HoriXpanse`}
                        FrontText2={'Metasurfer VR Time Travel Adventures'}
                        BackText={'Embark on a mind-bending journey with HoriXpanse, where futuristic technology meets historical exploration in the Metasurfer VR realm. Unleash the thrill of time travel adventures, experiencing the past like never before in a space where history and innovation collide.'}
                    />
                    <Card
                        customClass={'card3d'}
                        FrontPath={two}
                        BackPath={twoFlip}
                        FrontText={`HoriXBet`}
                        FrontText2={'Metaverse Casinos'}
                        BackText={'Dive into the exhilarating world of HoriXBet, where cutting-edge technology and blockchain innovation redefine the art of gambling. Experience metaverse casinos like never before, where luck meets sophistication, and every bet becomes a thrilling leap into the future.'}
                    />
                </div>
                <div className="featureCenter">
                    <Card
                        customClass={"card3dcenter"}
                        FrontPath={three}
                        BackPath={threeFlip}
                        FrontText={`HoriXlearn`}
                        FrontText2={'The Futuristic Knowledge Hub'}
                        BackText={'Embark on a mind-bending journey with HoriXpanse, where futuristic technology meets historical exploration in the Metasurfer VR realm. Unleash the thrill of time travel adventures, experiencing the past like never before in a space where history and innovation collide.'}
                    />
                </div>
                <div className="featureRight">
                    <Card
                        customClass={"card3d"}
                        FrontPath={four}
                        BackPath={fourFlip}
                        FrontText={`HoriXplore`}
                        FrontText2={`Random Chat rooms`}
                        BackText={`Step into the future of collaboration with HoriXphere, where virtual reality meets seamless teamwork. Experience a realm of immersive VR collaboration spaces, breaking the boundaries of traditional meetings and unleashing the potential of dynamic, interconnected digital workspaces.`}
                    />
                    <Card
                        customClass={"card3d"}
                        FrontPath={five}
                        BackPath={fiveFlip}
                        FrontText={`HoriXsphere`}
                        FrontText2={`Co-working spaces`}
                        BackText={'Ignite your curiosity with HoriXlearn, the beacon of futuristic education within the Horixon metaverse. Dive into an AI-powered knowledge hub, where learning transcends boundaries, and the synergy of advanced technology shapes a new era of interactive and immersive educational experiences.'}
                    />
                </div>

            </section>
            <section className="featuresContainer appContainer">
                <div className="featureNextSection">
                <Card
                    customClass={"card3d"}
                    FrontPath={four}
                    BackPath={fourFlip}
                    FrontText={`HoriXplore`}
                    FrontText2={`Random Chat rooms`}
                    BackText={`Step into the future of collaboration with HoriXphere, where virtual reality meets seamless teamwork. Experience a realm of immersive VR collaboration spaces, breaking the boundaries of traditional meetings and unleashing the potential of dynamic, interconnected digital workspaces.`}
                />
                <Card
                    customClass={"card3d"}
                    FrontPath={five}
                    BackPath={fiveFlip}
                    FrontText={`HoriXsphere`}
                    FrontText2={`Co-working spaces`}
                    BackText={'Ignite your curiosity with HoriXlearn, the beacon of futuristic education within the Horixon metaverse. Dive into an AI-powered knowledge hub, where learning transcends boundaries, and the synergy of advanced technology shapes a new era of interactive and immersive educational experiences.'}
                />
            </div></section>
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


            <section className="roadMapContainer appContainer my-5" ref={s4}>
                <h1 className="roadMapHeading text-center" data-aos="zoom-in-up">PARTNERS</h1>
                <PartNers array={data1} />
            </section>
            <section className="roadMapContainer appContainer">
                <h1 className="roadMapHeading text-center" data-aos="zoom-in-up">Stay Tuned For</h1>
                <PartNers array={data2} />
            </section>
            <div className="container-fluid my-5">
                <h1 className="roadMapHeading text-center">TEAM</h1>
                <div className="line">
                    <ProfileCard></ProfileCard>
                </div>
            </div>
        </>
    );
};

export default Home;
