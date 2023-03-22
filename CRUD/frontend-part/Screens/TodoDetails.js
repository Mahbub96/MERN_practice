import { StyleSheet, Text, View } from "react-native";

export default function TodoDetails({ route }) {
  const { id, data } = route.params;
  const { title, st, desc } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{desc}</Text>
      <Text>{st}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
