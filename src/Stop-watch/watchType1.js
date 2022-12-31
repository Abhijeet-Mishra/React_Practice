
import React, { useState, useEffect,useRef } from "react";

function StopWatchRef() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const inputRef=useRef();

  useEffect(() => {
    if (isActive ===true && isPaused ===false) {
      inputRef.current = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    
    return () => {
      console.log("return interval");
      clearInterval(inputRef.current);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  const calcTimer=()=> {
    return (
      <div>
        <span>Min :
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}{" "}
        </span>
        <span>Sec:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}{" "}
        </span>
        <span>MicSec:
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
    );
  }

  return (
    <div>
     <h1>{calcTimer()}</h1>
      {
        isActive ? (
        <div>

          <button onClick={() => handlePauseResume()}>
            {isPaused ? "Resume" : "Pause"}
          </button>

          <button onClick={() => handleReset()}>Reset</button>
          
        </div>
      ) : (
        <button onClick={() => handleStart()}>Start</button>
      )}
    </div>
  );
}

export default StopWatchRef;
