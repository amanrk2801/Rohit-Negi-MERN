import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";

// Bad way
// Object: {type: "slice/LoadingData", payload: true};
// {type: "slice/UpdateData, payload: data"}
// {type: "slice/ErrorData", payload: "Error Occurred"};
/*
function fetchUser() {
  useEffect(async () => {
    dispatch(LoadingData(true));
    try {
      const response = await fetch("Github User Info");
      const data = await response.json();
      dispatch(UpdateData(data));
    } catch (error) {
      dispatch(ErrorData("Error Occurred"));
    }
  });
}
*/

// Good way : createAsyncThunk
// {type: "coin/fetch", payload: data}

// {type: "coin/fetch/pending", payload: undefined}
// {type: "coin/fetch/fulfilled", payload: data}
// {type: "coin/fetch/rejected", payload: "error_message"}

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

const slicer1 = createSlice({
  name: "slice1",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// type: "coin/fetch/pending"
// type: "coin/fetch/fulfilled"
// type: "coin/fetch/rejected"

export default slicer1.reducer;
export { fetchData };
