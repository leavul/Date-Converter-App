import {
  getDateParts,
  getDayOptions,
  getDayWeekName,
  getMonthOptions,
  getNumberOfDaysInMonth,
  getYearOptions,
} from "@/utils/date-utils";
import { StyleSheet, View } from "react-native";
import { CalendarTypeToggle } from "../components/calendar-type-toggle";
import { DateCard } from "../components/date-card";
import { DatePicker } from "../components/date-picker";
import { ResetDateButton } from "../components/reset-date-button";
import { useDateStore } from "../store/date-store";

export default function Index() {
  const {
    selectedDate,
    calendarIsHijri,
    toggleCalendarType,
    setYear,
    setMonth,
    setDay,
    backToTodayDate,
  } = useDateStore();

  const [selectedYear, selectedMonth, selectedDay] = getDateParts(
    calendarIsHijri,
    selectedDate
  );

  const [yearOptionsHijri, yearOptionsGregorian] = getYearOptions();

  const monthOptions = getMonthOptions();

  const numberOfDaysInMonth = getNumberOfDaysInMonth(
    calendarIsHijri,
    selectedDate
  );
  const dayOptions = getDayOptions(numberOfDaysInMonth);

  const [convertedYear, convertedMonth, convertedDay] = getDateParts(
    !calendarIsHijri,
    selectedDate
  );

  const dateName = getDayWeekName(selectedDate);
  const convertedDate = `${convertedDay} / ${convertedMonth} / ${convertedYear}`;
  return (
    <View style={styles.container}>
      <CalendarTypeToggle
        onPress={toggleCalendarType}
        isHijri={calendarIsHijri}
      />

      <View style={styles.dateSectionView}>
        <View style={styles.pickerView}>
          <DatePicker
            options={calendarIsHijri ? yearOptionsHijri : yearOptionsGregorian}
            selectedOption={selectedYear}
            onChangeDate={(newYear) => setYear(newYear)}
          />
          <DatePicker
            options={monthOptions}
            selectedOption={selectedMonth}
            onChangeDate={(newMonth) => setMonth(newMonth)}
          />
          <DatePicker
            options={dayOptions}
            selectedOption={selectedDay}
            onChangeDate={(newDay) => setDay(newDay)}
          />
        </View>

        <ResetDateButton onPress={() => backToTodayDate()} />
      </View>

      <DateCard dateName={dateName} convertedDate={convertedDate} />
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
  dateSectionView: {
    width: "100%",
    paddingVertical: 18,
  },
  pickerView: { flexDirection: "row", gap: 12, marginBottom: 12 },
});
