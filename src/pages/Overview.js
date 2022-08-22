import React from 'react'
import startPic from '../pictures/yoga.gif'; 
import '../App.css';
import {useAuth0} from '@auth0/auth0-react';
import Spotify from "../components/Spotify";
import LoginButton from '../components/LoginButton';

const Overview = () => {

    const {loginWithRedirect, isAuthenticated} = useAuth0();

 

  return (
    

    

    !isAuthenticated &&
   ( <div><div className="container" >
    <img src={startPic} alt="startPic" className='yogaPic' />
    <h1 className='headline'>Are you ready to workout?</h1>
    </div>
    <div className='logBtn'>
        <LoginButton />
        </div>
        </div>
  )(

  )
  
  )
}

export default Overview