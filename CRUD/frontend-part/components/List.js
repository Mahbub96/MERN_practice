import { Text, View } from "react-native";

export default function List({ text, st }) {
  return (
    <View>
      <Text>0</Text>
      <Text>This is a text{text}</Text>
      <Text>{st}</Text>
    </View>
  );
}
