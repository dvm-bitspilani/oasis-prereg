import React from 'react'
import './LandingPage.css'
import { GoogleLogin } from '@react-oauth/google';
import Login from '../Login/Login';
export default function LandingPage(){
  return (
    <>
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
 </>
  )
}
