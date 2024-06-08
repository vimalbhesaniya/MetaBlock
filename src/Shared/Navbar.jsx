import React from 'react'
import "./sharedStyle.css"
import logoImage from "../assets/logo.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <header>
        <nav>
            <div className='logoContainer'>
                <img src={logoImage}  className='logoImage' alt="" />
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
        </nav>
      </header>
    </>
  )
}

export default Navbar
