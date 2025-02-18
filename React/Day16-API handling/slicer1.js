import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";

// Bad way
// Object: {type: "slice/LoadingData", payload: true};
// {type: "slice/UpdateData, payload: data"}
// {type: "slice/ErrorData", payload: "Error Occurred"};
/*
function fetchData() {
  useEffect(async () => {
    dispatch(LoadingData(true));
    try {
      const response = await fetch("Github User Info");
      const data = await response.json();
      dispatch(Update(data));
    } catch (error) {
      dispatch(ErrorData("Error Occurred"));
    }
  });
}
*/

// Good way
// {type: "coin/fetch", payload: data}
const fetchData = createAsyncThunk(
  // Action: type, payload
  "coin/fetch",

  async (args, thunkAPI) => {
    try {
      const response = fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`
      );
      const data = (await response).json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
