import React  from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
export default function Login() {
  const clientId = '735998356236-apic0eqqi6hedhjbps0ba2m1ob9oigke.apps.googleusercontent.com'; 
  const navigate = useNavigate();
    const onGoogleLoginSuccess = (credentialResponse) =>{
        // const sendDataToBackend = () => {
        //     const postLink = 'https://bits-oasis.org/2023/main/preregistrations/PreRegLogin/'
        //     const data = {
        //         credential : credentialResponse.credential
        //     }
        //     axios.post(postLink , data)
        //     .then(response => {
        //         console.log('Backend Response:', response.data);
        //         const navigate = useNavigate();
        //         navigate('/home');
        //       })
        //       .catch(error => {
        //         console.error('Error sending data to backend:', error);
        //       });
        // }
        // sendDataToBackend()
        // const navigate = useNavigate();
        console.log(credentialResponse)
        navigate('/home');

    }
    const onGoogleLoginFailure = () =>{
        console.log('first')
    }

  return (
    <GoogleLogin
    // type='standard'
    text='continue_with'
    shape='pill'
    // logo_alignment='center'
    theme='filled_blue'
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onGoogleLoginSuccess}
      onError={onGoogleLoginFailure}
      ux_mode = 'popup'
      useOneTap
    />
  );
};
