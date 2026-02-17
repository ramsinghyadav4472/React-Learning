import React, { useEffect, useState } from "react";
export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    return (
        <div>
            <h1>Timer: {time}</h1>
            <button onClick={() => setIsRunning(true)} style={{ backgroundColor: "green" }}>Start</button>
            <button onClick={() => setIsRunning(false)} style={{ marginLeft: "10px", backgroundColor: "red" }}>Stop</button>
            <button onClick={() => setTime(0)} style={{ marginLeft: "10px", backgroundColor: "yellow" }}>Reset</button>
        </div>
    );
}