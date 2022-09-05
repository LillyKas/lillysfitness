
import { useAuth0 } from "@auth0/auth0-react";
import stretchPic from "../pictures/Stretching.png";
import fullBodyPic from "../pictures/fullBody.png";
import armBackBodyPic from "../pictures/armBackWorkout.png";
import abWorkoputPic from "../pictures/abWorkout.png";
import backArrowPic from "../pictures/left-arrow.png";
import React, { useState, useEffect } from "react";




import LogoutButton from "../components/LogoutButton";

import Spotify from "../components/Spotify";
import StretchWorkout from "./StretchWorkout";
import FullBodyWorkout from "./FullBodyWorkout";
import ArmBackWorkout from "./ArmBackWorkout";
import AbWorkout from "./AbWorkout";


function Workouts() {
  //Authentication to App
  const { user, isAuthenticated } = useAuth0();

  const [workoutLinkContainer, setWorkoutLinkContainer] = React.useState(true);
  const [stretchWorkout, setStretchWorkout] = React.useState(false);
  const [fullBodyWorkout, setFullBodyWorkout] = React.useState(false);
  const [armBackWorkout, setArmBackWorkout] = React.useState(false);
  const [abWorkout, setAbWorkout] = React.useState(false);
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

  const showArmBackWorkout = () => {
    setWorkoutLinkContainer(false);
    setArmBackWorkout(true);
    setShowSpotify(false);
  };

  const showAbWorkout = () => {
    setWorkoutLinkContainer(false);
    setAbWorkout(true);
    setShowSpotify(false);
  };

  const showMenu = () => {
    setWorkoutLinkContainer(true);
    setStretchWorkout(false);
    setFullBodyWorkout(false);
    setShowSpotify(true);
  };

  return (



     isAuthenticated && ( 
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

              <img
                src={armBackBodyPic}
                alt="armBackPic"
                className="workoutPic"
                onClick={showArmBackWorkout}
              />  
              <img
                src={abWorkoputPic}
                alt="armBackPic"
                className="workoutPic"
                onClick={showAbWorkout}
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

          {armBackWorkout && (
            <div className="stretchWorkout">
          <ArmBackWorkout />
          </div>
          )}

          {abWorkout && (
            <div className="stretchWorkout">
          <AbWorkout />
          </div>
          )}
          
  <Spotify />
      
        <LogoutButton />
          </div>
        
      

         
      </div>
     )
 
  
  );
}

export default Workouts;
