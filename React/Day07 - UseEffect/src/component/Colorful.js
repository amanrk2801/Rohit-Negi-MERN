import React, { useState, useEffect } from 'react'

// Background color changer
const Colorful = () => {
    const [color, setColor] = useState("black");

    console.log("Colorful component");

    useEffect(() => {
        console.log("Inside useEffect");
        document.body.style.backgroundColor = color;
    }, [color]); // color is the dependency

    return (
        <>
            <h1>Background Color Changer</h1>
            <div className="btn">
                <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => setColor("red")}
                >
                    Red
                </button>
                <button
                    style={{ backgroundColor: "blue" }}
                    onClick={() => setColor("blue")}
                >
                    Blue
                </button>
                <button
                    style={{ backgroundColor: "hotpink" }}
                    onClick={() => setColor("hotpink")}
                >
                    Hot-pink
                </button>
                <button
                    style={{ backgroundColor: "green" }}
                    onClick={() => setColor("green")}
                >
                    Green
                </button>
                <button
                    style={{ backgroundColor: "yellow" }}
                    onClick={() => setColor("yellow")}
                >
                    Yellow
                </button>
            </div>
        </>
    )
}

export default React.memo(Colorful)

// When we are doing increment or decrement in the parent App component, this Colorful component also re-renders unnecessarily. That's why we use React.memo to prevent re-rendering.
// If the props we send from parent (App) component to Colorful component change, then Colorful also re-renders.
// React.memo is used to prevent unnecessary re-renders of Colorful when the state changes in the App component