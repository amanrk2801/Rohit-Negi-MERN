import { createSlice } from "@reduxjs/toolkit";

const foodSlicer = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    addItems: (state) => {
      state.count++;
    },
    removeItems: (state) => {
      state.count--;
    },
  },
});

export default foodSlicer.reducer;
export const { addItems, removeItems } = foodSlicer.actions;
