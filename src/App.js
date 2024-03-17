import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTotalSeconds(0);
  };

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>
        Time:{" "}
        <span>
          {String(minutes).padStart(1, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </p>
      <div>
        {!isRunning ? (
          <button onClick={startStopwatch}>Start</button>
        ) : (
          <button onClick={stopStopwatch}>Stop</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}
