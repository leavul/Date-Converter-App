import moment from "moment-hijri";

// Get date parts function props
interface GetDatePartsProps {
  date: moment.Moment;
  calendarTypeIsHijri: boolean;
}

// Helper function to get the year, month, and day from a moment object
export function getDateParts({
  date,
  calendarTypeIsHijri,
}: GetDatePartsProps): { day: number; month: number; year: number } {
  return {
    year: calendarTypeIsHijri
      ? // Hijri year
        date.iYear()
      : // Gregorian year
        date.year(),

    month: calendarTypeIsHijri
      ? // Hijri month
        date.iMonth() + 1 // +1 to convert 0-indexed to 1-indexed
      : // Gregorian month
        date.month() + 1, // +1 to convert 0-indexed to 1-indexed

    day: calendarTypeIsHijri
      ? // Hijri day
        date.iDate()
      : // Gregorian day
        date.date(),
  };
}

// Wheel picker item interface
interface WheelPickerItem<T> {
  value: T;
  label: string;
}

// Generate wheel picker options function props
interface GenerateWheelPickerOptionsProps {
  start: number;
  end: number;
}

// Helper function to generate wheel picker options
function generateWheelPickerOptions({
  start,
  end,
}: GenerateWheelPickerOptionsProps): WheelPickerItem<number>[] {
  // List of wheel picker options
  const items: WheelPickerItem<number>[] = [];

  for (let i = start; i <= end; i++) {
    // Add wheel picker option
    items.push({ value: i, label: i.toString() });
  }
  return items;
}

// Get year options function props
interface GetYearOptionsProps {
  calendarTypeIsHijri: boolean;
}

// Helper function to get year options
export function getYearOptions({
  calendarTypeIsHijri,
}: GetYearOptionsProps): WheelPickerItem<number>[] {
  // Number of years to display before and after the current year
  const range = 50;
  // Current year
  const currentYear = calendarTypeIsHijri
    ? // Hijri current year
      moment().iYear()
    : // Gregorian current year
      moment().year();

  // Return year wheel picker options
  return generateWheelPickerOptions({
    start: currentYear - range,
    end: currentYear + range,
  });
}

// Helper function to get month options
export function getMonthOptions(): WheelPickerItem<number>[] {
  // Return month wheel picker options
  return generateWheelPickerOptions({
    start: 1,
    end: 12,
  });
}

// Get day options function props
interface GetDayOptionsProps {
  calendarTypeIsHijri: boolean;
  date: moment.Moment;
}

// Helper function to get day options
export function getDayOptions({
  calendarTypeIsHijri,
  date,
}: GetDayOptionsProps): WheelPickerItem<number>[] {
  // Number of days in current selected month
  const numberOfDays = calendarTypeIsHijri
    ? date.iDaysInMonth() // Hijri number of days in month
    : date.daysInMonth(); // Gregorian number of days in month

  // Return day wheel picker options
  return generateWheelPickerOptions({
    start: 1,
    end: numberOfDays,
  });
}

// Get formatted date function props
interface GetFormattedDateProps {
  date: moment.Moment;
  isFromHijriToGregorian: boolean;
}

// Helper function to get formatted date
export function getFormattedDate({
  date,
  isFromHijriToGregorian,
}: GetFormattedDateProps): string {
  // Return formatted date: Year / Month / Day
  if (isFromHijriToGregorian) {
    // Return Gregorian formatted date
    return date.format("YYYY / MM / DD");
  } else {
    // Return Hijri formatted date
    return date.format("iYYYY / iMM / iDD");
  }
}

// Get day name function props
interface GetDayWeekNameProps {
  date: moment.Moment;
}

// Helper function to get day name
export function getDayWeekName({ date }: GetDayWeekNameProps): string {
  // Return day name
  // There no need to convert the day name to the other calendar type
  // Because the day name is the same in both calendars
  return date.format("dddd");
}
