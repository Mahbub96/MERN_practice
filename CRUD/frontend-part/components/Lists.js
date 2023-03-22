import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import List from "./List";

export default function Lists() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item, i) => (
          <List
            key={i}
            data={item}
            onPress={() => {
              console.log(i);
              navigation.navigate("Details", { id: i });
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});

const data = [
  {
    title: "title 1",
    desc: "this is desc 1",
    st: "active",
  },
  {
    title: "title 2",
    desc: "this is desc 2",
    st: "active",
  },

  {
    title: "title 3",
    desc: "this is desc 3",
    st: "active",
  },

  {
    title: "title 4",
    desc: "this is desc 4",
    st: "active",
  },

  {
    title: "title 5",
    desc: "this is desc 5",
    st: "active",
  },

  {
    title: "title 6",
    desc: "this is desc 6",
    st: "active",
  },
];
