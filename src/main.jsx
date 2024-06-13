import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style/res.css";
import "animate.css/animate.css";
import Loader from "./Components/Loader.jsx";
import { createContext } from "react";
 
const activeModal = createContext();
const whichModal = createContext();
const RootComponent = () => {
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
    const [modal, setModal] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },3000);
    }, []);

    return (
        <>
            <whichModal.Provider value={[modal, setModal]}>
                <activeModal.Provider value={[active, setActive]}>
                    <React.StrictMode>
                
                        {loading ? <Loader /> : <App />}
                    </React.StrictMode>
                </activeModal.Provider>
            </whichModal.Provider>
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<RootComponent />);

export { whichModal, activeModal };
