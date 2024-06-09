import React from 'react'
import "./sharedStyle.css"
import logoImage from "../assets/logo.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>

            {/* <header className='responsiveSidebar'>

            </header> */}

            <header>
                <nav>
                    <div className='logoContainer'>
                        <img src={logoImage} className='logoImage' alt="" />
                    </div>
                    <div className='navLinkContainer d-flex'>
                        <div className='navLinkItem'>
                            <Link to={'/'} className='navLink'>Home</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={'/'} className='navLink'>Features</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={'/'} className='navLink'>RoadMap</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={'/'} className='navLink'>Contact</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={'/'} className='navLink'>Login</Link>
                        </div>
                        <div className='navLinkItem'>
                            <Link to={'/'} className='navLink'>Register</Link>
                        </div>
                    </div>

                    <div className='burgerIconContainer'>
                        <input id="checkbox" type="checkbox" />
                        <label class="toggle" for="checkbox">
                            <div id="bar1" class="bars"></div>
                            <div id="bar2" class="bars"></div>
                            <div id="bar3" class="bars"></div>
                        </label>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar
