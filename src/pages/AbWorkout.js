import React, { useState, useEffect } from "react";
import timesUpSound from "../sounds/beep.wav";
import "../App.css";
import allExercises from "../abWorkout.json";


import { useAuth0 } from "@auth0/auth0-react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const AbWorkout = (props) => {
  const [btnStatusStart, setBtnStatusStart] = React.useState(false);
  const [exercise, setExercise] = useState(allExercises);
  const [number, setNumber] = useState(0);

  const [timer, setTimer] = React.useState(exercise[number].duration);
  const audio = new Audio(timesUpSound);
  const [startedTimer, setStartedTimer] = React.useState(false);

  const { isAuthenticated } = useAuth0();
  const [key, setKey] = useState(0);

  const [srcPic, setSrcPic] = useState("Pause")

  //Start Timer on Button Click --> startBtn
  const startTimer = () => {
    setStartedTimer(true);
    setKey((prevKey) => prevKey + 1);
    setTimer(exercise[number].duration)
    setBtnStatusStart(true)
  };

  //Stop/Play on Button click
  const stopTimer = () => {
    startedTimer ? stop() : play();
  };


          const stop =() => {
            setStartedTimer(false)
            setSrcPic("Go on")
          }

          const play =() => {
            setStartedTimer(true)
            setSrcPic("Pause")
          }


  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">next</div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  const nextExercise = () => {  
    setNumber(number + 1);
    console.log("next")
  }

  const prevExercise = () => {  
    setNumber(number - 1);
    console.log("prev")
  }

  return (
    isAuthenticated && (
      <div className="workout-container">
        <div className="timer-container">
        <CountdownCircleTimer
              key={key}
              size={120}
              isPlaying={startedTimer}
              duration={timer}
              colors={["#DDBAD1", "#FFB2B6","#F57A9B","#D1355F"]}
              colorsTime={[30, 15, 7, 0]}
              onComplete={() => {
                setNumber(number + 1);
                audio.play();
                setBtnStatusStart(false)
              }}
            >
              {renderTime}
            </CountdownCircleTimer>
         
        </div>
      
        <div className="container-info">
        <img
            src={exercise[number].picture}
            alt="exercisePic"
            className="exercisePicFB"
          />
            </div>

          <div className="button-container">
       
       <button onClick={prevExercise} className="navBtns" >
       back
       </button>
       <h2 className="exercise-nameFB">{exercise[number].nameOfExercise}</h2>
       <button onClick={nextExercise} className="navBtns" disabled={btnStatusStart}>
        next
       </button>
  
     </div>
         
        
      
        <div className="button-container">
      
          <button onClick={stopTimer} className="stopBtn" >
          {srcPic}
          </button>
          <button onClick={startTimer} className="stopBtn" disabled={btnStatusStart}>
            Start
          </button>
     
        </div>
        <div></div>
      </div>
    )
  );
};

export default AbWorkout;
