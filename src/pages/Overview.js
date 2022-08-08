import React from 'react'
import startPic from '../pictures/yoga.gif'; 
import '../App.css';
import {useAuth0} from '@auth0/auth0-react';

const Overview = () => {

    const {loginWithRedirect, isAuthenticated} = useAuth0();

  return (

    !isAuthenticated &&
   ( <div className="container" >
    <img src={startPic} alt="startPic" className='yogaPic' />
    <h1 className='headline'>Are you ready to workout?</h1>
    </div>
  ))
}

export default Overview