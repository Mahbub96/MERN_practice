import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import useDataContext from "../hooks/useDataContext";

const AddTodo = ({ navigation }) => {
  const { setDatas } = useDataContext();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    setDatas((prev) => [{ title, desc }, ...prev]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={(text) => setDesc(text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderColor: "#dddddd",
    marginBottom: 20,
  },
});
export default AddTodo;
