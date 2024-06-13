import { useContext, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/HomePage/Home";
import { createContext } from "react";
import RenderModal from "./Modals/RenderModal";
import { activeModal } from "./main";

const Navigater = createContext();

const Handler = createContext();
function App() {
    const s1 = useRef();
    const s2 = useRef();
    const s3 = useRef();
    const s4 = useRef();
    const s5 = useRef();
    const handleScroll = (refEle) => {
        window.scrollTo({
            top: refEle.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <>
            {<RenderModal />}
            <Handler.Provider value={handleScroll}>
                <Navigater.Provider value={[s1, s2, s3, s4, s5]}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route path="/" element={<Home />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Navigater.Provider>
            </Handler.Provider>
        </>
    );
}

export default App;
export { Navigater, Handler };
