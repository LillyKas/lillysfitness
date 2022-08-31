import React from 'react';
import '../App.css';
import {useAuth0} from '@auth0/auth0-react';

import {Link} from "react-router-dom";


const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (

    !isAuthenticated ? (
    <button className='loginBtn' onClick={() => loginWithRedirect()}>
        Login
    </button>
    ) : (
      <div>
      <Link className='loginBtn' to="/"> Go to workouts </Link>
      </div>
    )
  )
}

export default LoginButton