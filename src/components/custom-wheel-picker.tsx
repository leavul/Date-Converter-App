import type { PickerItem } from "@quidone/react-native-wheel-picker";
import WheelPicker from "@quidone/react-native-wheel-picker";
import { StyleSheet, Text, View } from "react-native";

// Props for the custom wheel picker
interface CustomWheelPickerProps {
  label: string;
  options: PickerItem<number>[];
  selectedOption: number;
  onChangeDate: (value: number) => void;
  extraValues: [number];
}

// Custom wheel picker component
export function CustomWheelPicker({
  label,
  options,
  selectedOption,
  onChangeDate,
  extraValues,
}: CustomWheelPickerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <WheelPicker
        itemTextStyle={styles.optionsText}
        overlayItemStyle={styles.selector}
        visibleItemCount={5}
        data={options}
        value={selectedOption}
        // If try to set new value while the picker wheels are moving,
        // the pickers won’t respond because of the package behavior.
        // So, following the package instructions, this value forces the pickers
        // to reset and set the new value when something like that issue happens.
        extraValues={extraValues}
        onValueChanged={({ item: { value } }) => onChangeDate(value)}
        enableScrollByTapOnItem={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#343a3cff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4a4e50ff",
  },
  labelText: {
    paddingTop: 4,
    fontSize: 12,
    textAlign: "center",
    color: "#fff4e4ff",
  },
  optionsText: {
    fontSize: 18,
    color: "#ffdeb0ff",
  },
  selector: { borderRadius: 0, backgroundColor: "#f8c47bff" },
});
