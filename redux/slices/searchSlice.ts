import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const searchCounterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = searchCounterSlice.actions;
export default searchCounterSlice.reducer;
