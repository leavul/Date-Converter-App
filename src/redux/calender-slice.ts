import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment-hijri";

export const calenderSlice = createSlice({
  name: "calender",
  initialState: {
    date: moment(),
    calendarTypeIsHijri: true,
  },
  reducers: {
    toggle_calender_type: (state) => {
      state.calendarTypeIsHijri = !state.calendarTypeIsHijri;
      state.date = moment();
    },
    set_date_part: (
      state,
      action: PayloadAction<{ part: "year" | "month" | "day"; value: number }>
    ) => {
      const { part, value } = action.payload;
      const isHijri = state.calendarTypeIsHijri;

      if (part === "year") {
        state.date = isHijri
          ? state.date.clone().iYear(value)
          : state.date.clone().year(value);
      } else if (part === "month") {
        state.date = isHijri
          ? state.date.clone().iMonth(value - 1)
          : state.date.clone().month(value - 1);
      } else if (part === "day") {
        state.date = isHijri
          ? state.date.clone().iDate(value)
          : state.date.clone().date(value);
      }
    },

    resetToToday: (state) => {
      state.date = moment();
    },
  },
});

export const { toggle_calender_type, set_date_part, resetToToday } =
  calenderSlice.actions;

export default calenderSlice.reducer;
