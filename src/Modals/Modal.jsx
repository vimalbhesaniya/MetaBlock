import React from 'react'
import './modal.css'
const Modal = ({Body , onclose}) => {
  return (
    <div className='modalContainer'>
        <button className='closeButton' onClick={onclose}>❌</button>
        <Body />
    </div>
  )
}

export default Modal