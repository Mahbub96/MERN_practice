import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import useDataContext from "../hooks/useDataContext";

const EditTodo = ({ navigation, route }) => {
  const { id } = route.params;

  const { setDatas, datas } = useDataContext();

  const [title, setTitle] = useState(datas[id].title);
  const [desc, setDesc] = useState(datas[id].desc);

  const handleSubmit = () => {
    const newArray = [...datas];
    newArray[id] = { title, desc };
    setDatas([...newArray]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Description"
        value={desc}
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
export default EditTodo;
