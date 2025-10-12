import { StyleSheet, Text, View } from "react-native";
export function DateCard({
  dateName,
  convertedDate,
}: {
  dateName: string;
  convertedDate: string;
}) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.convertedDate}>{convertedDate}</Text>
      <Text style={styles.dayName}>( 📅 {dateName} )</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginTop: 24,
    backgroundColor: "#343a3cff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4a4e50ff",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  convertedDate: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffdeb0ff",
  },
  dayName: {
    paddingTop: 14,
    fontSize: 16,
    color: "#fff4e4ff",
  },
});
