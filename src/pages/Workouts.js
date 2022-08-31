
import { useAuth0 } from "@auth0/auth0-react";
import stretchPic from "../pictures/Stretching.png";
import fullBodyPic from "../pictures/fullBody.png";
import backArrowPic from "../pictures/left-arrow.png";
import React, { useState, useEffect } from "react";

import Overview from './Overview';



import LogoutButton from "../components/LogoutButton";

import Spotify from "../components/Spotify";
import StretchWorkout from "./StretchWorkout";
import FullBodyWorkout from "./FullBodyWorkout";
import LoginButton from '../components/LoginButton';


function Workouts() {
  //Authentication to App
  const { user, isAuthenticated } = useAuth0();

  const [workoutLinkContainer, setWorkoutLinkContainer] = React.useState(true);
  const [stretchWorkout, setStretchWorkout] = React.useState(false);
  const [fullBodyWorkout, setFullBodyWorkout] = React.useState(false);
  const [showSpotify, setShowSpotify] = React.useState(true);

  const showStretchWorkout = () => {
    setWorkoutLinkContainer(false);
    setStretchWorkout(true);
    setShowSpotify(false);
  };


  const showFullBodyWorkout = () => {
    setWorkoutLinkContainer(false);
    setFullBodyWorkout(true);
    setShowSpotify(false);
  };

  const showMenu = () => {
    setWorkoutLinkContainer(true);
    setStretchWorkout(false);
    setShowSpotify(true);
  };

  return (



     isAuthenticated ? ( 
      <div>
        <div className="greeting-container">
          
            <img
              src={backArrowPic}
              alt="backArrowPic"
              className="backArrowPic"
              onClick={showMenu}
            />
         
          <h3>Hello, sunshine</h3>
          <img src={user.picture} alt="profilePic" className="profilePic" />
        </div>

        <div className="menu-container">
          {workoutLinkContainer && (
        
            <div className="workout-link-container">
              <img
                src={stretchPic}
                alt="stretchPic"
                className="workoutPic"
                onClick={showStretchWorkout}
              />   
                  <img
                src={fullBodyPic}
                alt="fullBodyPic"
                className="workoutPic"
                onClick={showFullBodyWorkout}
              />   
            </div>
           
          )}
          {stretchWorkout && (
            <div className="stretchWorkout">
          <StretchWorkout />
          </div>
          )}

          {fullBodyWorkout && (
            <div className="stretchWorkout">
          <FullBodyWorkout />
          </div>
          )}
          
          <Spotify  />
      
        <LogoutButton />
          </div>
        
    
         
      </div>
     ) : (
      <div>
        <Overview />
           
      <div className='logBtn'>
      <LoginButton />
      </div>
      </div>
   
     )
 
 
  
  );
}

export default Workouts;
