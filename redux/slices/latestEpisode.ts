import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const latestEpisodesCounterSlice = createSlice({
  name: "latestEpisode",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement, setPage } =
  latestEpisodesCounterSlice.actions;
export default latestEpisodesCounterSlice.reducer;
