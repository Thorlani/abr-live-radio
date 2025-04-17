import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const searchCountSlice = createSlice({
  name: "searchCount",
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

export const { increment, decrement } = searchCountSlice.actions;
export default searchCountSlice.reducer;
