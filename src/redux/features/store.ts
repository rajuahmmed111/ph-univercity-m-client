import { configureStore } from "@reduxjs/toolkit";

// store setup
export const store = configureStore({
  reducer: {},
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;