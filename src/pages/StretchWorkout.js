import React, { useState, useEffect } from 'react';
import timesUpSound from "../sounds/timesUp.mp3";
import '../App.css';
import allExercises from "../stretchingPam.json";
import Pic from '../pictures/stretch_poses/upAndDown.png'; 


function StretchWorkout() {

  const [btnStatusStart, setBtnStatusStart] = React.useState(false);
  const [btnStatusStop, setBtnStatusStop] = React.useState(true);
  const [exercise, setExercise] = useState(allExercises);
  const [number, setNumber] = useState(0);
  const audio = new Audio(timesUpSound);

  const [timer, setTimer] = React.useState(exercise[number].duration);
 

  //Use RefHook to make it stop at 0 
  //stores reference to SetInterval --> clear when timer hits 0 
  const id =React.useRef(null);
  const clear=()=>{
  window.clearInterval(id.current)
  }

//Start Timer on Button Click --> startBtn 
  const startTimer = () => {
 
    id.current=window.setInterval(()=>{
      setTimer((time)=>time-1)
  
    },1000)
    setBtnStatusStart(true)
    setBtnStatusStop(false)
    return ()=>clear();
  } 

  

//Stop Timer when time is up, set new Time so countdown starts again, play audio 
 React.useEffect(()=>{
   if(timer===0 && number <= 2){
     clear();
     audio.play();
     setTimer(exercise[number].duration)
     setNumber(number + 1)
     audio.play();
     startTimer();
   } else if(timer===0 && number > 2){
    clear();
    audio.play();
    setTimer(5)
    setNumber(number + 1)
    audio.play();
   }
   
 },[timer]) 

 //Stop Timer on Button click -->  stopBtn
 const stopTimer = () => {
  clear()
  audio.play();
  setBtnStatusStart(false)
  setBtnStatusStop(true)
}



  return (
    <div className="App">
      <header>
      <div>Time left : {timer} </div>
      </header>
      <button className="startBtn" onClick={startTimer} disabled={btnStatusStart}>Start Workout</button>
      <button className="stopBtn" onClick={stopTimer} disabled={btnStatusStop}>Stop Workout</button>
      <img src={exercise[number].picture} alt="exercisePic" className='exercisePic' />
      <img src={Pic} alt="exercisePic" className='exercisePic' />
      <h2>{exercise[number].nameOfExercise}</h2>
    </div>
  );
};
  

  
  export default StretchWorkout;