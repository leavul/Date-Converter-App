import { StyleSheet, View } from "react-native";
import { CustomWheelPicker } from "./custom-wheel-picker";
import { ResetDateButton } from "./reset-date-button";

export interface CustomWheelPickerItem {
  value: number;
  label: string;
}

interface DatePickerPanelProps {
  year: number;
  month: number;
  day: number;
  yearOptions: CustomWheelPickerItem[];
  monthOptions: CustomWheelPickerItem[];
  dayOptions: CustomWheelPickerItem[];
  resetSignal: number;
  onChangeDatePart: (part: "year" | "month" | "day", value: number) => void;
  onResetToToday: () => void;
}

export function DatePickerPanel({
  year,
  month,
  day,
  yearOptions,
  monthOptions,
  dayOptions,
  resetSignal,
  onChangeDatePart,
  onResetToToday,
}: DatePickerPanelProps) {
  return (
    <View style={styles.container}>
      <View style={styles.wheelPickersView}>
        <CustomWheelPicker
          label="Year:"
          options={yearOptions}
          selectedOption={year}
          extraValues={[resetSignal]}
          onChangeDate={(newYear) => onChangeDatePart("year", newYear)}
        />
        <CustomWheelPicker
          label="Month:"
          options={monthOptions}
          selectedOption={month}
          extraValues={[resetSignal]}
          onChangeDate={(newMonth) => onChangeDatePart("month", newMonth)}
        />
        <CustomWheelPicker
          label="Day:"
          options={dayOptions}
          selectedOption={day}
          extraValues={[resetSignal]}
          onChangeDate={(newDay) => onChangeDatePart("day", newDay)}
        />
      </View>
      <ResetDateButton onPress={onResetToToday} />
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
