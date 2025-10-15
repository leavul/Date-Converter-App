import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CalendarTypePanel } from "../components/calendar-type-panel";
import { ConvertedDateCard } from "../components/converted-date-card";
import { DatePickerPanel } from "../components/date-picker-panel";
import {
  resetToToday,
  set_date_part,
  toggle_calendar_type,
} from "../redux/calendar-slice";
import type { RootState } from "../redux/store";
import {
  getDateParts,
  getDayOptions,
  getDayWeekName,
  getFormattedDate,
  getMonthOptions,
  getYearOptions,
} from "../services/calendar-service";

// Calculate Hijri and Gregorian year options only once
const hijriYearOptions = getYearOptions({ calendarTypeIsHijri: true });
const gregorianYearOptions = getYearOptions({ calendarTypeIsHijri: false });

export default function DateConverterScreen() {
  const { selectedDate, calendarTypeIsHijri } = useSelector(
    (state: RootState) => state.calendar
  );
  const dispatch = useDispatch();

  // Get current year, month, and day from the Redux date (returned by helper function)
  const { year, month, day } = getDateParts({
    date: selectedDate,
    calendarTypeIsHijri: calendarTypeIsHijri,
  });

  // Select year options based on currently chosen calendar type
  const yearOptions = calendarTypeIsHijri
    ? hijriYearOptions
    : gregorianYearOptions;
  // Month and day picker options
  const monthOptions = getMonthOptions();
  // Day picker options
  const dayOptions = getDayOptions({
    calendarTypeIsHijri: calendarTypeIsHijri,
    date: selectedDate,
  });

  // Information to display after converting the calendar data
  const formattedDate = getFormattedDate({
    date: selectedDate,
    isFromHijriToGregorian: calendarTypeIsHijri,
  });
  const weekdayName = getDayWeekName({ date: selectedDate });

  return (
    <View style={styles.container}>
      {/* Calendar type toggle */}
      <CalendarTypePanel
        fromHijriToGregorian={calendarTypeIsHijri}
        onToggleCalendarTypePress={() => dispatch(toggle_calendar_type())}
      />

      {/* Date pickers */}
      <DatePickerPanel
        year={year}
        month={month}
        day={day}
        yearOptions={yearOptions}
        monthOptions={monthOptions}
        dayOptions={dayOptions}
        onChangeDatePart={(part, value) =>
          dispatch(set_date_part({ part, value }))
        }
        onResetToToday={() => dispatch(resetToToday())}
      />

      {/* Converted date card */}
      <ConvertedDateCard
        formattedDate={formattedDate}
        weekdayName={weekdayName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
