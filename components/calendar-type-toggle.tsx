import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: () => void;
  isHijri: boolean;
};

export function CalendarTypeToggle({ onPress, isHijri }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.calendarTypeContainer}>
        <Text style={styles.toFromText}>From</Text>
        <Text style={styles.calendarTypeText}>
          {isHijri ? "Hijri" : "Gregorian"}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <MaterialCommunityIcons
          name="swap-horizontal"
          size={40}
          color="#ffdeb0ff"
        />
      </TouchableOpacity>
      <View style={styles.calendarTypeContainer}>
        <Text style={styles.toFromText}>To</Text>
        <Text style={styles.calendarTypeText}>
          {!isHijri ? "Hijri" : "Gregorian"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  calendarTypeContainer: {
    paddingVertical: 4,
    minWidth: 120,
    backgroundColor: "#f8c47b5e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ffdcac6d",
  },
  toFromText: {
    fontSize: 12,
    color: "#fff4e4ff",
  },
  calendarTypeText: {
    paddingTop: 4,
    color: "#ffdeb0ff",
  },
});
