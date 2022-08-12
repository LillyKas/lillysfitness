
import { useAuth0 } from "@auth0/auth0-react";
import stretchPic from "../pictures/Stretching.png";
import fullBodyPic from "../pictures/Full Body.png";
import warmUpPic from "../pictures/Warm Up.png";
import backArrowPic from "../pictures/left-arrow.png";
import React, { useState, useEffect } from "react";

import LogoutButton from "../components/LogoutButton";

import Spotify from "../components/Spotify";
import StretchWorkout from "./StretchWorkout";

function HomePage() {
  //Authentication to App
  const { user, isAuthenticated } = useAuth0();

  const [workoutLinkContainer, setWorkoutLinkContainer] = React.useState(true);
  const [stretchWorkout, setStretchWorkout] = React.useState(false);
  const [showSpotify, setShowSpotify] = React.useState(true);

  const showStretchWorkout = () => {
    setWorkoutLinkContainer(false);
    setStretchWorkout(true);
    setShowSpotify(false);
  };

  const showMenu = () => {
    setWorkoutLinkContainer(true);
    setStretchWorkout(false);
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
                src={stretchPic}
                alt="stretchPic"
                className="workoutPic"
                onClick={showStretchWorkout}
              />
                  <img
                src={stretchPic}
                alt="stretchPic"
                className="workoutPic"
                onClick={showStretchWorkout}
              />
                    <img
                src={stretchPic}
                alt="stretchPic"
                className="workoutPic"
                onClick={showStretchWorkout}
              />
                    <img
                src={stretchPic}
                alt="stretchPic"
                className="workoutPic"
                onClick={showStretchWorkout}
              />

                

              {/*    <img src={fullBodyPic} alt="stretchPic" className="workoutPic" />
            <img src={warmUpPic} alt="stretchPic" className="workoutPic" /> */}
            </div>
          )}
          {stretchWorkout && (
            <div className="stretchWorkout">
          <StretchWorkout />
          </div>
          )}
          </div>
        
      
          <Spotify  />
         
      </div>
     )
  );
}

export default HomePage;
