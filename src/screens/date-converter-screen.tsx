import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CalendarTypePanel } from "../components/calendar-type-panel";
import { ConvertedDateCard } from "../components/converted-date-card";
import { DatePickerPanel } from "../components/date-picker-panel";
import {
  resetToToday,
  set_date_part,
  toggle_calender_type,
} from "../redux/calender-slice";
import type { RootState } from "../redux/store";
import {
  getDateParts,
  getDayOptions,
  getDayWeekName,
  getFormattedDate,
  getMonthOptions,
  getYearOptions,
} from "../services/calendar-service";

export default function DateConverterScreen() {
  const { date, calendarTypeIsHijri } = useSelector(
    (state: RootState) => state.calender
  );
  const dispatch = useDispatch();

  const { year, month, day } = getDateParts(date, calendarTypeIsHijri);
  const [resetSignal, setResetSignal] = useState(0);

  const hijriYearOptions = getYearOptions(true);
  const gregorianYearOptions = getYearOptions(false);

  const yearOptions = calendarTypeIsHijri
    ? hijriYearOptions
    : gregorianYearOptions;
  const monthOptions = getMonthOptions();
  const dayOptions = getDayOptions(calendarTypeIsHijri, date);

  const weekdayName = getDayWeekName(date);
  const formattedDate = getFormattedDate(date, calendarTypeIsHijri);

  return (
    <View style={styles.container}>
      <CalendarTypePanel
        onToggleCalenderTypePress={() => dispatch(toggle_calender_type())}
        fromHijriToGregorian={calendarTypeIsHijri}
      />

      <DatePickerPanel
        year={year}
        month={month}
        day={day}
        yearOptions={yearOptions}
        monthOptions={monthOptions}
        dayOptions={dayOptions}
        resetSignal={resetSignal}
        onChangeDatePart={(part, value) =>
          dispatch(set_date_part({ part, value }))
        }
        onResetToToday={() => {
          dispatch(resetToToday());
          setResetSignal((prev) => prev + 1);
        }}
      />

      <ConvertedDateCard
        weekdayName={weekdayName}
        formattedDate={formattedDate}
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
