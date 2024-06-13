import React, { useEffect, useRef } from 'react'
import './modal.css'

const Modal = ({Body , onclose}) => {
    const openTable = useRef();
    useEffect(() => {
        if (openTable) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [openTable]);
  return (
    <div className='modalContainer' ref={openTable}>
        <button className='closeButton' onClick={onclose}>❌</button>
        <Body />
    </div>
  )
}

export default Modal