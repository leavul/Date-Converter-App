import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CalendarTypePanelProps = {
  onToggleCalenderTypePress: () => void;
  fromHijriToGregorian: boolean;
};

function CalendarTypeBox({
  label,
  type,
}: {
  label: "To" | "From";
  type: string;
}) {
  return (
    <View style={styles.calendarTypeBox}>
      <Text style={styles.labelText}>{label}:</Text>
      <Text style={styles.typeText}>{type}</Text>
    </View>
  );
}

export function CalendarTypePanel({
  onToggleCalenderTypePress,
  fromHijriToGregorian,
}: CalendarTypePanelProps) {
  return (
    <View style={styles.container}>
      <CalendarTypeBox
        label="From"
        type={fromHijriToGregorian ? "Hijri" : "Gregorian"}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        activeOpacity={0.8}
        onPress={onToggleCalenderTypePress}
      >
        <MaterialCommunityIcons
          name="swap-horizontal"
          size={40}
          color="#ffdeb0ff"
        />
      </TouchableOpacity>
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
