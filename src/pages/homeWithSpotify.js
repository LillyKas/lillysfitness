import React from 'react'
import Spotify from "../components/Spotify";
import HomePage from "./HomePage";

function homeWithSpotify() {
  return (
    <div>
    <HomePage />
       <Spotify /> 
    </div>
  )
}

export default homeWithSpotify