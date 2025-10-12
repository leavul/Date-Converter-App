import { PickerItem } from "@quidone/react-native-wheel-picker";
import moment from "moment-hijri";

export function getCurrentYear(): [number, number] {
  const now = moment();
  return [now.iYear(), now.year()];
}

export function getDateParts(
  isHijri: boolean,
  date: moment.Moment
): [number, number, number] {
  return [
    isHijri ? date.iYear() : date.year(),
    (isHijri ? date.iMonth() : date.month()) + 1, // 0-indexed in moment
    isHijri ? date.iDate() : date.date(),
  ];
}

export function getYearOptions(): [PickerItem<number>[], PickerItem<number>[]] {
  function yearList(currentYear: number): PickerItem<number>[] {
    const years: PickerItem<number>[] = [];
    for (
      let yearNumber = currentYear + 25;
      yearNumber >= currentYear - 25;
      yearNumber--
    ) {
      const option = { value: yearNumber, label: yearNumber.toString() };
      years.push(option);
    }
    return years;
  }

  const [currentYearHijri, currentYearGregorian] = getCurrentYear();
  const hijriYears: PickerItem<number>[] = yearList(currentYearHijri);
  const gregorianYears: PickerItem<number>[] = yearList(currentYearGregorian);

  return [hijriYears, gregorianYears];
}

export function getMonthOptions(): PickerItem<number>[] {
  const months: PickerItem<number>[] = [];
  for (let monthNumber = 1; monthNumber <= 12; monthNumber++) {
    const option = { value: monthNumber, label: monthNumber.toString() };
    months.push(option);
  }
  return months;
}

export function getNumberOfDaysInMonth(
  isHijri: boolean,
  date: moment.Moment
): number {
  return isHijri ? date.iDaysInMonth() : date.daysInMonth();
}

export function getDayOptions(
  numberOfDaysInMonth: number
): PickerItem<number>[] {
  const days: PickerItem<number>[] = [];
  for (let dayNumber = 1; dayNumber <= numberOfDaysInMonth; dayNumber++) {
    const option = { value: dayNumber, label: dayNumber.toString() };
    days.push(option);
  }
  return days;
}

export function getDayWeekName(date: moment.Moment): string {
  return date.format("dddd");
}


