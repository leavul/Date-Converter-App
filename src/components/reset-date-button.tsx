import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};
export function ResetDateButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Ionicons name="reload-outline" size={18} color="000000ff" />
      <Text style={styles.text}>{"Go back to today data"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#f8c47bff",
    justifyContent: "center",
    alignItems: "center",
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
