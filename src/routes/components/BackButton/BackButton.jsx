import React from 'react'
import BackBtn from '../../../assets/backarrow.png'
import './BackButton.css'
const BackButton = () => {
  return (
    <div className='back-button-container'>
        <img src={BackBtn} alt="Back" />
    </div>
  )
}

export default BackButton
