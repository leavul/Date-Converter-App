import moment from "moment-hijri";

export function getDateParts(
  date: moment.Moment,
  calendarTypeIsHijri: boolean
): { day: number; month: number; year: number } {
  return {
    year: calendarTypeIsHijri ? date.iYear() : date.year(),
    month: calendarTypeIsHijri ? date.iMonth() + 1 : date.month() + 1,
    day: calendarTypeIsHijri ? date.iDate() : date.date(),
  };
}

export interface WheelPickerItem<T> {
  value: T;
  label: string;
}

function generateWheelPickerOptions(
  start: number,
  end: number
): WheelPickerItem<number>[] {
  const items: WheelPickerItem<number>[] = [];

  for (let i = start; i <= end; i++) {
    items.push({ value: i, label: i.toString() });
  }
  return items;
}

export function getYearOptions(
  calendarTypeIsHijri: boolean
): WheelPickerItem<number>[] {
  const range = 50;
  const currentYear = calendarTypeIsHijri ? moment().iYear() : moment().year();

  return generateWheelPickerOptions(currentYear - range, currentYear + range);
}

export function getMonthOptions(): WheelPickerItem<number>[] {
  return generateWheelPickerOptions(1, 12);
}

export function getDayOptions(
  calendarTypeIsHijri: boolean,
  date: moment.Moment
): WheelPickerItem<number>[] {
  const numberOfDays = calendarTypeIsHijri
    ? date.iDaysInMonth()
    : date.daysInMonth();
  return generateWheelPickerOptions(1, numberOfDays);
}

export function getFormattedDate(
  date: moment.Moment,
  fromHijriToGregorian: boolean
): string {
  if (fromHijriToGregorian) {
    return date.format("YYYY / MM / DD");
  } else {
    return date.format("iYYYY / iMM / iDD");
  }
}

export function getDayWeekName(date: moment.Moment): string {
  return date.format("dddd");
}
