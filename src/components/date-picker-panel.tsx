import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CustomWheelPicker } from "./custom-wheel-picker";
import { ResetDateButton } from "./reset-date-button";

// Props for the custom wheel picker item
interface CustomWheelPickerItem<T> {
  value: T;
  label: string;
}

// Props for the date picker panel
interface DatePickerPanelProps {
  year: number;
  month: number;
  day: number;
  yearOptions: CustomWheelPickerItem<number>[];
  monthOptions: CustomWheelPickerItem<number>[];
  dayOptions: CustomWheelPickerItem<number>[];
  onChangeDatePart: (part: "year" | "month" | "day", value: number) => void;
  onResetToToday: () => void;
}

// Panel that displays date pickers for selecting year, month, and day,
// along with a button to reset to today's date.
export function DatePickerPanel({
  year,
  month,
  day,
  yearOptions,
  monthOptions,
  dayOptions,
  onChangeDatePart,
  onResetToToday,
}: DatePickerPanelProps) {
  // If "reset to today" button is pressed while the picker wheels are moving,
  // the pickers won’t respond because of the package behavior.
  // So, following the package instructions, this value forces the pickers
  // to reset and show today’s date when something like that issue happens.
  const [resetSignal, setResetSignal] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.wheelPickersView}>
        {/* Year wheel picker */}
        <CustomWheelPicker
          label="Year:"
          options={yearOptions}
          selectedOption={year}
          extraValues={[resetSignal]}
          onChangeDate={(newYear) => onChangeDatePart("year", newYear)}
        />

        {/* Month wheel picker */}
        <CustomWheelPicker
          label="Month:"
          options={monthOptions}
          selectedOption={month}
          extraValues={[resetSignal]}
          onChangeDate={(newMonth) => onChangeDatePart("month", newMonth)}
        />

        {/* Day wheel picker */}
        <CustomWheelPicker
          label="Day:"
          options={dayOptions}
          selectedOption={day}
          extraValues={[resetSignal]}
          onChangeDate={(newDay) => onChangeDatePart("day", newDay)}
        />
      </View>

      {/* Button to reset all pickers to today's date */}
      <ResetDateButton
        onResetToToday={() => {
          // Reset to today's date
          onResetToToday();

          // Force picker to reset if perhaps the picker wheels are moving
          setResetSignal((prev) => prev + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 18,
    gap: 12,
  },
  wheelPickersView: {
    flexDirection: "row",
    gap: 12,
  },
});
