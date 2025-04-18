import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const searchCountSlice = createSlice({
  name: "searchCount",
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

export const { increment, decrement, setPage } = searchCountSlice.actions;
export default searchCountSlice.reducer;
