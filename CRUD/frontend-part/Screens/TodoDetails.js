import { StyleSheet, Text, View } from "react-native";

export default function TodoDetails({ route }) {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
