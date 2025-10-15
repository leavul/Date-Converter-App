import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment-hijri";

// Redux slice to manage calendar state (selected date + calendar type)
export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    // Selected date
    selectedDate: moment(),
    // Calendar type (true = Hijri, false = Gregorian)
    calendarTypeIsHijri: true,
  },
  reducers: {
    // Toggle calendar type between Hijri and Gregorian

    // Also resets the date to today to avoid invalid or out-of-range dates
    // (For example, When switching from Gregorian to Hijri, if the corresponding Hijri date is outside the Wheel Picker range,
    // the picker cannot display that date. The stored date is different, which would make the "From" and "To" dates inconsistent.
    // To prevent inconsistencies, we reset the date to today.
    toggle_calendar_type: (state) => {
      state.calendarTypeIsHijri = !state.calendarTypeIsHijri;
      state.selectedDate = moment();
    },
    // Set a specific date part (year, month, day)
    set_date_part: (
      state,
      action: PayloadAction<{ part: "year" | "month" | "day"; value: number }>
    ) => {
      const { part, value } = action.payload;
      const isHijri = state.calendarTypeIsHijri;

      if (part === "year") {
        state.selectedDate = isHijri
          ? // Set hijri year
            state.selectedDate.clone().iYear(value)
          : // Set gregorian year
            state.selectedDate.clone().year(value);
      } else if (part === "month") {
        state.selectedDate = isHijri
          ? // Set hijri month
            state.selectedDate.clone().iMonth(value - 1) // Months are 0-indexed, so -1 to convert 1-indexed to 0-indexed
          : // Set gregorian month
            state.selectedDate.clone().month(value - 1); // Months are 0-indexed, so -1 to convert 1-indexed to 0-indexed
      } else if (part === "day") {
        state.selectedDate = isHijri
          ? // Set hijri day
            state.selectedDate.clone().iDate(value)
          : // Set gregorian day
            state.selectedDate.clone().date(value);
      }
    },

    // Reset the date to today
    resetToToday: (state) => {
      state.selectedDate = moment();
    },
  },
});

export const { toggle_calendar_type, set_date_part, resetToToday } =
  calendarSlice.actions;

export default calendarSlice.reducer;
