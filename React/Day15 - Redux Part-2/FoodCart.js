import React, { useState } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "./Slice";

const FoodCart = ({ value }) => {
  const [inCart, setInCart] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    if (inCart) {
      dispatch(removeItems());
      setInCart(false);
    } else {
      dispatch(addItems());
      setInCart(true);
    }
  }
  return (
    <>
      <h1 style={{ marginBottom: "10px" }}>{value.food}</h1>
      <h1 style={{ marginBottom: "10px" }}>{value.Price}</h1>
      <button
        style={{
          padding: "5px 10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {inCart ? "Remove" : "Add"}
      </button>
    </>
  );
};

export default FoodCart;
