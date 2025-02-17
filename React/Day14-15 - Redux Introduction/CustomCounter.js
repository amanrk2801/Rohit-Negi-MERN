import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Decrement, Increment, CustomIncreaser } from "./Slicer1";

const CustomCounter = () => {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  // Dispatch internal => {type: "slice1/CustomIncreaser", payload: number}
  function handleClick() {
    dispatch(CustomIncreaser(Number(number)));
    setNumber("");
  }
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default CustomCounter;
