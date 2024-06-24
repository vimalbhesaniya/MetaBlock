import React, { act, useContext, useRef, useState } from 'react'
import "./sharedStyle.css"
import logoImage from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { Handler  , Navigater} from '../App'

const Navbar = () => {
    const handler = useContext(Handler)
    const [s1 , s2, s3 ,s4 ,s5] = useContext(Navigater)
    const [active  , setActive] = useState(false);
    return (
        <>
            <header className='NavBar'>
                <nav>
                    <div className='logoContainer'>
                        <img src={logoImage} className='logoImage' alt="" />
                    </div>
                    <div className={'navLinkContainer d-flex '}>
                        <div className='navLinkItem'>
                            <Link  to={''} className='navLink' onClick={()=> handler(s1)}>Home</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={''} className='navLink' onClick={()=> handler(s5)} >Features</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={''} className='navLink' onClick={()=> handler(s3)}>RoadMap</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={'https://www.telegram.org'} className='navLink'>Contact</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={'https://www.google.com'} className='navLink'>Login</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={'https://www.youtube.com'} className='navLink'>Register</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <header className='resNavbar'>
                <nav>
                    <div className='logoContainer'>
                        <img src={logoImage} className='logoImage' alt="" />
                    </div>
                    <div className='burgerIconContainer align-self-end' >
                        <input id="checkbox" type="checkbox" onClick={()=> {setActive(!active); console.log(active); }  } />
                        <label className="toggle" htmlFor="checkbox">
                            <div id="bar1" className="bars"></div>
                            <div id="bar2" className="bars"></div>
                            <div id="bar3" className="bars"></div>
                        </label>
                    </div>
                </nav>
                {<div className={active?'navLinkContainerRes d-flex' : 'hide d-flex'}>
                <div className='navLinkItem'>
                            <Link  to={''} className='navLink' onClick={()=> handler(s1)}>Home</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={''} className='navLink' onClick={()=> handler(s5)} >Features</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={''} className='navLink' onClick={()=> handler(s3)}>RoadMap</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={''} className='navLink' onClick={()=> handler(s4)}>Contact</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={''} className='navLink'>Login</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={''} className='navLink'>Register</Link>
                        </div>
                    </div>}
            </header>

            
        </>
    )
}

export default Navbar
