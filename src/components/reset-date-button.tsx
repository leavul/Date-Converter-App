import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Props for the reset button
interface ResetDateButtonProps {
  onResetToToday: () => void;
}

// Reset button to go back to today data
export function ResetDateButton({ onResetToToday }: ResetDateButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onResetToToday}
    >
      <Ionicons name="reload-outline" size={18} color="#000000ff" />
      <Text style={styles.text}>{"Go back to today data"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#f8c47bff",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#ffdcac6d",
  },
  text: {
    color: "#000000ff",
    fontSize: 14,
  },
});
