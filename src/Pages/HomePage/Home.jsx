import React from 'react'
import "./home.css"
import Button from '../../Components/Button'
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
                        <h1 className='aboutHeading'>Revolutionizes Arbitrage With Decentralized Flash Loans And Innovative Staking Opportunities</h1>
                        <p className='aboutDescription paraFont'>Embark on a journey through cutting-edge technology with Horixon. In a world where artificial intelligence, blockchain, and virtual reality converge, we redefine the digital landscape. Dive into futuristic metaverse casinos powered by AI on the blockchain, exploring a realm where innovation meets entertainment. Join us on a transformative exploration of the metaverse, where modern ideas shape the future of technology, gaming, and digital experiences.</p>
                        <Button Text={'EXPLORE'}></Button>
                </div>
            </section>

        </>
    )
}

export default Home
