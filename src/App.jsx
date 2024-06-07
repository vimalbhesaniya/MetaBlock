import { useState } from 'react'
import './App.css'
import { BrowserRouter  , Route , Routes} from "react-router-dom"
import Layout from './Layout'
import Home from './Pages/HomePage/Home'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} > 
                        <Route path='/' element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
