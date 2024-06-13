import React, { useContext, useEffect } from "react";
import Modal from "../Modals/Modal";
import "./popup.css";
import logo from "../assets/logo.png";
import Button from "../Components/Button";
import { whichModal } from "../main";
import Aos from "aos";

const Body = () => {
    const [modal, setModal] = useContext(whichModal);
    useEffect(()=>{
        Aos.init({
            duration:600
        })
    })
    return (
        <>
            <div className="comingSoonCard" data-aos='zoom-in'>
                <div className="cardLogoContainer">
                <button className='closeButton' onClick={()=>setModal('')}>❌</button>
                    <img src={logo} alt="" />
                    <h1 className="comingSoonTitle">STAKING</h1>
                    <Button
                        Text={"Comming Soon"}
                        onclick={() => setModal("")}
                    />
                </div>
            </div>
        </>
    );
};

const ComingSoon = () => {
    const [modal, setModal] = useContext(whichModal);
    return <Modal Body={Body} onclose={() => setModal("")} />;
};

export default ComingSoon;
