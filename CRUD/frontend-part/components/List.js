import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function List(props) {
  const { data, style, ...rest } = props;

  const { title, desc, st } = data;
  return (
    <TouchableOpacity style={[styles.container, { ...style }]} {...rest}>
      <View style={styles.icon}>
        <FontAwesome name="connectdevelop" size={24} color="black" />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          This is a text{title}
        </Text>
        <Text style={{ color: "gray" }}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    elevation: 2,
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 12,
  },
  icon: {
    padding: 8,
    marginRight: 15,
    backgroundColor: "#ddd",
    borderRadius: 12,
  },
  text: {
    flex: 1,
  },
});
