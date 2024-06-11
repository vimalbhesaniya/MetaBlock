import React from 'react'
import "./style.css"
const Card = ({customClass, BackPath , FrontPath}) => {
    return (
        <>
            <div className="parent">
                <div class={customClass}>
                    <div className={`content-box front `} style={{background:`url(${FrontPath})`}} >

                    </div>
                    <div className="date-box">
                        <p className="fronPara">HoriXpanse <br /> Metasurfer VR Time Travel Adventures </p>
                    </div>
                    <div className={`content-box back`} style={{background:`url(${BackPath})`}}>
                    <div className="date-box ">
                        <p className="fronPara">HoriXpanse <br /> Metasurfer VR Time Travel Adventures </p>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
