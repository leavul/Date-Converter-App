import { configureStore } from "@reduxjs/toolkit";
import calenderSlice from "./calender-slice";

export const store = configureStore({
  reducer: {
    calender: calenderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
