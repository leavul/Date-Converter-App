import { StyleSheet, Text, View } from "react-native";

// Props for the converted date card
interface ConvertedDateCardProps {
  formattedDate: string;
  weekdayName: string;
}

// Card to display the converted date and its weekday
export function ConvertedDateCard({
  formattedDate,
  weekdayName,
}: ConvertedDateCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{formattedDate}</Text>
      <Text style={styles.weekdayText}>( 📅 {weekdayName} )</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#343a3cff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4a4e50ff",
    padding: 16,
  },
  dateText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffdeb0ff",
  },
  weekdayText: {
    paddingTop: 14,
    fontSize: 16,
    color: "#fff4e4ff",
  },
});
