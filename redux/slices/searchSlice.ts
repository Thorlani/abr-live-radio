import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const searchCounterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = searchCounterSlice.actions;
export default searchCounterSlice.reducer;
