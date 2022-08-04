import React, { useState, useEffect } from 'react';
import timesUpSound from "../sounds/timesUp.mp3";



function WorkoutPage() {

  const [timer, setTimer] = React.useState(10);
  const [btnStatusStart, setBtnStatusStart] = React.useState(false);
  const [btnStatusStop, setBtnStatusStop] = React.useState(true);
  const audio = new Audio(timesUpSound);
 

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

  

//Stop Timer when time is up
 React.useEffect(()=>{
   if(timer===0){
     clear();
     audio.play();
     setTimer(10)
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
      <button className="startBtn" onClick={startTimer} disabled={btnStatusStart}>StartTimer</button>
      <button className="stopBtn" onClick={stopTimer} disabled={btnStatusStop}>StopTimer</button>
    </div>
  );
};
  

  
  export default WorkoutPage;