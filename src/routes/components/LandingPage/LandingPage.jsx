import React from 'react'
import './LandingPage.css'
import Logo from "../../../assets/oasis-logo.png"
import LogoText from "../../../assets/oasis.png"
import RightContainerImage from "../../../assets/rectangle1.png"
import Login from '../Login/Login';
export default function LandingPage(){
  return (
    <>
  <div className="landing-page-container">
    <div className="landing-page-left">
      <div className="landing-page-logo-container">
        <div className="landing-page-logo">
        <img src={Logo} alt="Oasis Logo" />
        </div>
        <div className="landing-page-logo-text">
      <img src={LogoText} alt="Oasis Logo Text" />
        </div>
      </div>
      <div className="landing-page-signin-btn">
     <Login />
      </div>
    </div>
    <div className="landing-page-right" style={{
      backgroundImage : `url(${RightContainerImage})`
    }}></div>
  </div>
 </>
  )
}
