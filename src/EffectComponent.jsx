import React, { useState, useEffect } from "react";
import MyComponent from "./MyComponent";

//useEffect() - react hook that tells react do some code when:
//1. this component re-renders
//2. this component mounts
//3. the state of a value changes

//useEffect(function, [dependencies])

//1. useEffect(() => {}) -> runs after every re-render
//2. useEffect(() => {}, []) -> runs only on mount
//3. useEffect(() => {} , [value]) -> runs on mount + when value changes

//uses
//#1 event listeners
//#2 dom manipulation
//#3 subscriptions (real-time updates)
//#4 fetching data from an API
//#5 clean up when a component unmounts

function EffectComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Counter: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    if (count >= 1) {
      setCount((c) => c - 1);
    }
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button> <br />
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default EffectComponent;
