import React from 'react'


const Button = ({ Text  , onclick}) => {
    return (
        <>
            <button className="button" onClick={onclick}>{Text}</button>
        </>
    )
}

export default Button
