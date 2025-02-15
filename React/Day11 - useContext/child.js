import React, { useContext } from "react";
import GlobalContext from "./global";

const Child = () => {
  const { ctn, sctn } = useContext(GlobalContext);
  return (
    <>
      <h2>Count: {ctn}</h2>
      <button onClick={() => sctn(ctn + 1)}>Increase</button>
    </>
  );
};

export default Child;
