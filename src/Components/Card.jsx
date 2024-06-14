import React from 'react'
import "./style.css"
import Button from './Button'

const Card = ({path  ,  text , visible = false , customClass, BackPath , FrontPath , FrontText ,BackText ,FrontText2 }) => {
    return (
        <>
            <div className="parent">
                <div class={customClass}>
                    <div className={`content-box front `} style={{background:`url(${FrontPath})`}} >

                    </div>
                    <div className="date-box">
                        <p className="fronPara">{FrontText} <br /> {FrontText2}</p>
                    </div>
                    <div className={`content-box back`} style={{background:`url(${BackPath})`}}>
                    <div className="date-box ">
                        <p className="backPara">{BackText}</p>
                        {!visible&&<Button Text={text}></Button>}
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
