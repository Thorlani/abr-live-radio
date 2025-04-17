import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const podcastEpisodeCounterSlice = createSlice({
  name: "podcastEpisode",
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

export const { increment, decrement } = podcastEpisodeCounterSlice.actions;
export default podcastEpisodeCounterSlice.reducer;
