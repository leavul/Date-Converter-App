import type { PickerItem } from "@quidone/react-native-wheel-picker";
import WheelPicker from "@quidone/react-native-wheel-picker";
import { StyleSheet } from "react-native";

type Props = {
  options: PickerItem<any>[];
  selectedOption: number;
  onChangeDate: (value: number) => void;
};

export function DatePicker({ options, selectedOption, onChangeDate }: Props) {
  return (
    <WheelPicker
      style={styles.dateContainer}
      itemTextStyle={styles.text}
      overlayItemStyle={styles.selector}
      data={options}
      value={selectedOption}
      onValueChanged={({ item: { value } }) => onChangeDate(value)}
      enableScrollByTapOnItem={true}
    />
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#343a3cff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4a4e50ff",
  },
  text: {
    color: "#ffdeb0ff",
    fontSize: 18,
  },
  selector: { backgroundColor: "#f8c47bff" },
});
