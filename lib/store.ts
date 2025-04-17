import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/slices/counterSlice'; // example slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
