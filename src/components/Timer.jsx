import { useState, useRef, useEffect } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    let intervalRef = useRef(null);

    function StartTimer() {
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    }

    function StopTimer() {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    function ResetTimer() {
        StopTimer();
        setSeconds(0);
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Simple Timer using useRef</h2>
            <p style={{ fontSize: "24px" }}>Time: {seconds} seconds</p>

            <button onClick={StartTimer} style={{ marginRight: "8px" }}>
                Start
            </button>
            <button onClick={StopTimer} style={{ marginRight: "8px" }}>
                Stop
            </button>
            <button onClick={ResetTimer}>Reset</button>
        </div>
    );
}
