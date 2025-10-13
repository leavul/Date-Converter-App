import { StyleSheet, Text, View } from "react-native";
export function ConvertedDateCard({
  weekdayName,
  formattedDate,
}: {
  weekdayName: string;
  formattedDate: string;
}) {
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
