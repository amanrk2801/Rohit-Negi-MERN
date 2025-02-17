import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1";

const Counting = () => {
  const count = useSelector((state) => {
    return state.slice1.count;
  });
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter is {count}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </>
  );
};

export default Counting;
