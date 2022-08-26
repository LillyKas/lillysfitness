import React from 'react'
import { useState } from "react";
import countdown from "../sounds/test_music.wav";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Beep() {

    const audio = new Audio(countdown);
  var duration = 0;

const startSound = () => {  
audio.play()
}

const stopSound = () => {  
    audio.pause()
    }

    

  return (
    <div>
    <div onClick={startSound}> Start
  </div>

  <div onClick={stopSound} > Stop
  </div>

  <CountdownCircleTimer
    isPlaying
    duration={5}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    onComplete={() => {
      audio.pause()
      return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
    } }
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>

  </div>

  )
}

export default Beep