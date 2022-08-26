import React, { useState, useEffect } from "react";
import timesUpSound from "../sounds/beep.wav";
import countdown from "../sounds/test_music.wav";
import "../App.css";
import allExercises from "../stretchingPam.json";

import backArrowPic from "../pictures/left-arrow.png";
import playBtnPic from "../pictures/play-button.png";
import stopBtnPic from "../pictures/pause.png";
import ProgressBar from "../components/progress-bar.component";
import { useAuth0 } from "@auth0/auth0-react";

import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const StretchWorkout = (props) => {
  const [btnStatusStart, setBtnStatusStart] = React.useState(false);
  const [btnStatusStop, setBtnStatusStop] = React.useState(true);
  const [exercise, setExercise] = useState(allExercises);
  const [number, setNumber] = useState(0);


  const [timer, setTimer] = React.useState(exercise[number].duration);
  const audio = new Audio(timesUpSound);
  const [startedTimer, setStartedTimer] = React.useState(false);

  const { isAuthenticated } = useAuth0();

  const { token } = props;



  //Use RefHook to make it stop at 0
  //stores reference to SetInterval --> clear when timer hits 0
  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
   
  };

  //Start Timer on Button Click --> startBtn
  const startTimer = () => {
   
    setStartedTimer(true)
   /*  id.current = setInterval(() => {
      setTimer((time) => time - 1);
    
    }, 1000);
    
    setBtnStatusStart(true);
    setBtnStatusStop(false);
    return () => clear(); */
  };

  //Stop Timer when time is up, set new Time so countdown starts again
  React.useEffect(() => {

    if (timer === 0 && number <= 21) {
      clear();
      setTimer(exercise[number].duration);
      setNumber(number + 1);
      startTimer();

    } else if (timer === 0 && number > 22) {
      clear();
      setTimer(0);
      setNumber(number + 1);
     
    }
  }, [timer]);

  //Stop Timer on Button click -->  stopBtn
  const stopTimer = () => {

    setStartedTimer(false)
/*     clear();
    console.log("test music btn")
    setBtnStatusStart(false);
    setBtnStatusStop(true); */
  };



  return (
    isAuthenticated && (
      <div>

        <div className="exercise-container">
          <img
            src={exercise[number].picture}
            alt="exercisePic"
            className="exercisePic"
          />
        </div>

        <div className="container-info">
         
          <h2 className="exercise-name">{exercise[number].nameOfExercise}</h2>
          <div className="time-counter">
           
        <CountdownCircleTimer
    isPlaying={startedTimer}
    duration={exercise[number].duration}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    onComplete={() => {
      setNumber(number + 1);
      audio.play()
      return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
    } }
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
          </div>
        </div>
        <div className="button-container">
          <div onClick={startTimer} className="playBtn-container">
            <img
              src={playBtnPic}
              alt="btnStart"
              className="playBtnPic"
              disabled={btnStatusStart}
            />
          </div>

          <div onClick={stopTimer} className="stopBtn-container">
            <img
              src={stopBtnPic}
              alt="btnStop"
              className="stopBtnPic"
              disabled={btnStatusStop}
            />
          </div> 
        </div>
        <div>
       
      </div>
   
      </div>
    )
  );
};

export default StretchWorkout;
