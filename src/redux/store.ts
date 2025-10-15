import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendar-slice";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
