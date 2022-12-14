import React from 'react';
import '../App.css';
import {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (

    !isAuthenticated && (
    <button className='loginBtn' onClick={() => loginWithRedirect()}>
        Login
    </button>
    ) 
  )
}

export default LoginButton