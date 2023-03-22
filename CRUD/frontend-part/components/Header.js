import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headers}>
      <AntDesign name="layout" size={29} color="#bbb" />
      <Text style={styles.headerText}>ToDos</Text>
      <AntDesign name="calendar" size={24} color="#bbb" />
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    backgroundColor: "#515151",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  headerText: {
    color: "#fff",
    fontSize: 30,
  },
});
export default Header;
