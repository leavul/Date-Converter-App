import moment from "moment-hijri";
import { create } from "zustand";

interface DateState {
  selectedDate: moment.Moment;
  calendarIsHijri: boolean;
  toggleCalendarType: () => void;
  setYear: (newYear: number) => void;
  setMonth: (newMonth: number) => void;
  setDay: (newDay: number) => void;
  backToTodayDate: () => void;
}

export const useDateStore = create<DateState>((set, get) => {
  return {
    selectedDate: moment(),
    calendarIsHijri: false,
    toggleCalendarType: () => {
      set((state) => ({
        calendarIsHijri: !state.calendarIsHijri,
      }));
    },
    setYear: (newYear: number) => {
      const { calendarIsHijri, selectedDate: date } = get();
      set({
        selectedDate: calendarIsHijri
          ? date.clone().iYear(newYear)
          : date.clone().year(newYear),
      });
    },
    setMonth: (newMonth: number) => {
      const { calendarIsHijri, selectedDate: date } = get();
      const momentNewMonth = newMonth - 1; // 0-indexed in moment
      set({
        selectedDate: calendarIsHijri
          ? date.clone().iMonth(momentNewMonth)
          : date.clone().month(momentNewMonth),
      });
    },
    setDay: (newDay: number) => {
      const { calendarIsHijri, selectedDate: date } = get();
      set({
        selectedDate: calendarIsHijri
          ? date.clone().iDate(newDay)
          : date.clone().date(newDay),
      });
    },
    backToTodayDate: () => {
      const todayDate = moment();
      set(() => ({
        selectedDate: todayDate,
      }));
    },
  };
});
