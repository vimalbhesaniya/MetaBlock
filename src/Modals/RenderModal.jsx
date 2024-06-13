import React, { useContext } from "react";
import ComingSoon from "../PopUps/ComingSoon";
import { whichModal } from "../main";
const RenderModal = () => {
    const [modal, setModal] = useContext(whichModal);
    
    const handleModal = () => {
        switch (modal) {
            case "commingSoon":
                return <ComingSoon />;
                break;
        }
    };
    return <>{handleModal()}</>;
};

export default RenderModal;
