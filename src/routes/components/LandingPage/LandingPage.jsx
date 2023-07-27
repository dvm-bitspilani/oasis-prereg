import React from 'react'
import './LandingPage.css'
import { GoogleLogin } from '@react-oauth/google';
import Logo from "../../../assets/goldshit.png"
import LogoText from "../../../assets/layer2.png"
import RightContainerImage from "../../../assets/rectangle1.png"
import { useNavigate } from 'react-router-dom';
export default function LandingPage(){
  const Navigate = useNavigate();
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
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    Navigate('/home');
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
      </div>
    </div>
    <div className="landing-page-right" style={{
      backgroundImage : `url(${RightContainerImage})`
    }}></div>
  </div>


 </>
  )
}
