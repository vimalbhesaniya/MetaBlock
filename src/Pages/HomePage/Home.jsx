import React from 'react'
import "./home.css"
import Button from '../../Components/Button'
import cryptoImage from "../../assets/staking.png"
const Home = () => {
    return (
        <>
            <section className='introSection'>
                <div className='contentContainer'>
                    <h4 className='introTitle'>INTRODUCING</h4>
                    <h1 className='introHeading'>MetaBlock</h1>
                    <p className='introDescription '>"Horixon " is an expansive gaming metaverse that seamlessly integrates augmented reality (AR), virtual reality (VR), and artificial intelligence (AI) to create a dynamic and interconnected gaming experience. This metaverse offers a variety of games, including a cutting-edge casino district, alongside other engaging experiences.</p>
                    <div className='buttonContainer'>
                        <Button Text={"INVEST"} />
                        <Button Text={"STAKE"} />
                    </div>

                </div>
                <video width="600" autoPlay loop muted className='introductionVideo'>
                    <source src='Videos/ICON_VERSION8.mp4' type="video/mp4" />
                </video>
            </section>

            <section className='aboutSection'>
                <div className='aboutLeft'>
                    <div className='bluryDiv1'></div>
                    <div className='bluryDiv2'></div>
                    <video width="600" autoPlay loop muted className='aboutVideo'>
                        <source src='Videos/surfer-7rYpoIub.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className='aboutRight'>
                    <p className='font aboutTitle'>MetaBlock</p>
                    <h1 className='aboutHeading mt-3'>Revolutionizes Arbitrage With Decentralized Flash Loans And Innovative Staking Opportunities</h1>
                    <p className='aboutDescription mt-3 paraFont'>Embark on a journey through cutting-edge technology with Horixon. In a world where artificial intelligence, blockchain, and virtual reality converge, we redefine the digital landscape. Dive into futuristic metaverse casinos powered by AI on the blockchain, exploring a realm where innovation meets entertainment. Join us on a transformative exploration of the metaverse, where modern ideas shape the future of technology, gaming, and digital experiences.</p>
                    <Button Text={'EXPLORE'}></Button>
                </div>
            </section>

            <section className='realitySection appContainer'>
                <p className='realityTitle'>ENDLESS REALITY</p>
                <p className='realityHeading'>DISCOVER THE OPPORTUNITIES OF <br /> METAVERSE</p>
            </section>

            <section className='appContainer stakeSection'>
                <div className='position-relative stakeLeft'>
                    <img src={cryptoImage} className='img-fluid w-100' alt="" />
                    <div className='bluryDiv1'></div>
                </div>
                <div className='stakeRight'>
                    <h1 className='stakHeading'>DIGITAL UNIVERSE ARCADE</h1>
                    <div>
                        <h3 className='subHeading'>Alien Auras </h3>
                        <p className='font subDesc'>Alien Auras is a cutting-edge font inspired by the dynamic world of cryptocurrency. Its futuristic design captures the essence of digital innovation and technological advancement, making it an ideal choice for crypto-related projects seeking a bold and forward-thinking aesthetic.</p>
                    </div>
                    <div>
    <h3 className='subHeading'>Flash Loan Arbitrage Bot</h3>
    <p className='font subDesc'>Leverage Flash Loan Arbitrage Bot for rapid and lucrative trading by exploiting price variations across decentralized finance platforms.</p>
</div>

<div>
    <h3 className='subHeading'>NFT Staking</h3>
    <p className='font subDesc'>Engage in NFT Staking to earn passive income and unlock rewards, enhancing the value and utility of your digital assets within the blockchain ecosystem.</p>
</div>

<div>
    <h3 className='subHeading'>Aura Finance</h3>
    <p className='font subDesc'>Access Aura Finance for comprehensive financial solutions, including lending, borrowing, and yield farming, facilitated by cutting-edge blockchain technology.</p>
</div>

<div>
    <h3 className='subHeading'>Aura Wallet</h3>
    <p className='font subDesc'>Securely manage your cryptocurrency assets with Aura Wallet, offering a user-friendly interface and advanced security features for convenient storage and transactions.</p>
</div>

<div>
    <h3 className='subHeading'>Alien Aura Battle Game</h3>
    <p className='font subDesc'>Experience thrilling gameplay in the Alien Aura Battle Game, where players engage in strategic battles and earn rewards using blockchain technology.</p>
</div>

<div>
    <h3 className='subHeading'>Aura Chain</h3>
    <p className='font subDesc'>Discover Aura Chain, a high-performance blockchain network designed for scalability, security, and interoperability, enabling seamless transactions and decentralized applications.</p>
</div>

                </div>
            </section>

        </>
    )
}

export default Home
