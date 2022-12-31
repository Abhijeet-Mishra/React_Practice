import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (active === true && pause === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [active, pause]);
  const handleStart = () => {
    setActive(true);
    setPause(false);
  };
  const handlePauseResume = () => {
    setPause(!pause);
  };
  const handleReset = () => {
    setActive(false);
    setTime(0);
  };
  return (
    <div>
      <h4>Google StopWatch : </h4>
      <>
        <span>
          Sec:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}{" "}
        </span>
        <span>
          MicSec:
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </>
      <div>
        {active ? (
          <button onClick={() => handlePauseResume()}>Stop</button>
        ) : (
          <button onClick={() => handleStart()}>Start</button>
        )}
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
