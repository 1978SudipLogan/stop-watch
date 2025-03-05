import React, { useState, useEffect } from "react";

function StopWatch() {
    const [theme, setTheme] = useState(true); // true for light theme, false for dark theme
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let intervalId = null;

    useEffect(() => {
        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    function formatTime(s) {
        let hrs = Math.floor(s / 3600);
        let min = Math.floor((s % 3600) / 60);
        let sec = s % 60;
        return `${String(hrs).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }

    function startWatch() {
        setIsRunning(true);
    }

    function stopWatch() {
        setIsRunning(false);
    }

    function resetWatch() {
        setIsRunning(false);
        setSeconds(0);
    }

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "20px",
                backgroundColor: theme ? "white" : "black",
                padding: "10px",
                borderRadius: "8px",
                maxWidth: "400px",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <h1
                style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    color: theme ? "black" : "white",
                }}
            >
                Stop Watch
            </h1>
            <h1
                id="display"
                style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#333",
                    padding: "10px",
                    background: "#f4f4f4",
                    borderRadius: "10px",
                    display: "inline-block",
                    width: "90%",
                    marginBottom: "20px",
                }}
            >
                {formatTime(seconds)}
            </h1>
            <div style={{ marginTop: "10px" }}>
                <button
                    style={{
                        fontSize: "1rem",
                        padding: "8px 16px",
                        margin: "5px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        background: "#28a745",
                        color: "white",
                    }}
                    onClick={startWatch}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button
                    style={{
                        fontSize: "1rem",
                        padding: "8px 16px",
                        margin: "5px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        background: "#dc3545",
                        color: "white",
                    }}
                    onClick={stopWatch}
                >
                    Stop
                </button>
                <button
                    style={{
                        fontSize: "1rem",
                        padding: "8px 16px",
                        margin: "5px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        background: "#007bff",
                        color: "white",
                    }}
                    onClick={resetWatch}
                >
                    Reset
                </button>
            </div>
            <div>
                <button
                    style={{
                        fontSize: "1rem",
                        padding: "8px 16px",
                        marginTop: "15px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        background: "#6c757d",
                        color: "white",
                    }}
                    onClick={() => setTheme((prevTheme) => !prevTheme)}
                >
                    {theme?"Light":"Dark"}
                </button>
            </div>
        </div>
    );
}

export default StopWatch;
