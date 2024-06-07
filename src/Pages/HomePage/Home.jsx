import React from 'react'

import "./home.css"
const Home = () => {
    return (
        <section className='introSection'>
            <video   width="600" autoPlay loop muted className='introductionVideo'>
                <source src='https://firebasestorage.googleapis.com/v0/b/jobduniya-ec494.appspot.com/o/18541-293467399_medium.mp4?alt=media&token=5a35f013-4965-431e-8916-0ed762dd2fd3' type="video/mp4" />
            </video>
        </section>
    )
}

export default Home
