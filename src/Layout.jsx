import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Shared/Footer'
import Navbar from './Shared/Navbar'


const Layout = () => {
    return (
        <>
        
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
