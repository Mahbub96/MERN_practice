import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconBtn from "./IconBtn";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headers}>
      <AntDesign name="layout" size={29} color="#bbb" />
      <Text style={styles.headerText}>ToDos</Text>
      <IconBtn onPress={() => navigation.navigate("AddTodo")}>
        <AntDesign name="pluscircleo" size={24} color="#ddd" />
      </IconBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    backgroundColor: "#515151",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: "#fff",
  },
  headerText: {
    color: "#fff",
    fontSize: 30,
  },
});
export default Header;
