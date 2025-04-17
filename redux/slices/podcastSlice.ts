import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const podcastCounterSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const { setPage, increment, decrement } = podcastCounterSlice.actions;
export default podcastCounterSlice.reducer;
