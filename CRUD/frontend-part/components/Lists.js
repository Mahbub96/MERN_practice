import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import useDataContext from "../hooks/useDataContext";
import List from "./List";

export default function Lists() {
  const [refreshing, setRefreshing] = React.useState(false);
  const { datas, setDatas } = useDataContext();

  //---------------------------- Refresh Handle ----------------------
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setDatas(datas);
    }, 2000);
  }, []);

  const navigation = useNavigation();

  // --------------- Delete Handle -----------------------
  const handleDelete = (id) => {
    const newData = datas.filter((item, i) => id !== i);
    setDatas([...newData]);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        {datas.map((item, i) => (
          <List
            key={i}
            data={item}
            onPress={() => {
              navigation.navigate("Details", { id: i, data: item });
            }}
            onDeletePress={() => handleDelete(i)}
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
