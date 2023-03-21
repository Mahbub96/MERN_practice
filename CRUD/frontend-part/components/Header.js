import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headers}>
      <View style={styles.icons}>
        <AntDesign name="layout" size={29} color="black" />
        <Text>ToDosr</Text>
      </View>
      <View>
        <AntDesign
          sytle={styles.icons}
          name="calendar"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "space-between",
    color: "#fff",
  },
  icons: { flex: 1, justifyContent: "space-between" },
});
export default Header;
