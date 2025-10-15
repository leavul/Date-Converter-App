import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Props for the calendar type box
interface CalendarTypeBoxProps {
  label: "To" | "From";
  type: "Hijri" | "Gregorian";
}

// Small box showing a label ("From"/"To") and the calendar type ("Hijri"/"Gregorian")
function CalendarTypeBox({ label, type }: CalendarTypeBoxProps) {
  return (
    <View style={styles.calendarTypeBox}>
      <Text style={styles.labelText}>{label}:</Text>
      <Text style={styles.typeText}>{type}</Text>
    </View>
  );
}

// Props for the calendar type panel
interface CalendarTypePanelProps {
  fromHijriToGregorian: boolean;
  onToggleCalendarTypePress: () => void;
}

// Panel with "From" and "To" boxes and a button to toggle calendar type
export function CalendarTypePanel({
  fromHijriToGregorian,
  onToggleCalendarTypePress,
}: CalendarTypePanelProps) {
  return (
    <View style={styles.container}>
      {/* Box displaying the "From" calendar type */}
      <CalendarTypeBox
        label="From"
        type={fromHijriToGregorian ? "Hijri" : "Gregorian"}
      />

      {/* Toggle button (swapping calendar type) */}
      <TouchableOpacity
        style={styles.toggleButton}
        activeOpacity={0.65}
        onPress={onToggleCalendarTypePress}>
        <MaterialCommunityIcons
          name="swap-horizontal"
          size={40}
          color="#ffdeb0ff"
        />
      </TouchableOpacity>

      {/* Box displaying the "To" calendar type */}
      <CalendarTypeBox
        label="To"
        type={fromHijriToGregorian ? "Gregorian" : "Hijri"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarTypeBox: {
    paddingVertical: 4,
    minWidth: 120,
    backgroundColor: "#f8c47b5e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ffdcac6d",
  },
  labelText: {
    fontSize: 12,
    color: "#fff4e4ff",
  },
  typeText: {
    paddingTop: 4,
    color: "#ffdeb0ff",
  },
  toggleButton: { padding: 12 },
});
