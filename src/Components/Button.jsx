import React from 'react'


const Button = ({ Text  , onclick , path}) => {
    return (
        <>
            <button className="button" onClick={onclick}> <a  href={path??'#'} target='_blank' >{Text}</a></button>
        </>
    )
}

export default Button
