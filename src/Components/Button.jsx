import React from 'react'


const Button = ({ Text  , onclick , path}) => {
    return (
        <>
            <button className="button" onClick={onclick}> <a href={path??'#'}>{Text}</a></button>
        </>
    )
}

export default Button
