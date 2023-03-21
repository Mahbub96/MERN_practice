import { Text, Button, HStack, View, VStack } from "native-base";
import React, { useEffect } from "react";
import * as cacheStore from "expo-secure-store";
import { useDataContext } from "../context/DataContext";

const Home = ({ navigation }) => {
  const { setAuth } = useDataContext();

  const handleLogout = async () => {
    await cacheStore.deleteItemAsync("accessToken");
    setAuth(false);
  };
  return (
    <VStack flex={1} justifyContent={"center"}>
      <HStack justifyContent={"center"}>
        {/* <Button onPress={() => navigation.navigate("Login")}> */}
        <Text>This is home page </Text>
        <Button onPress={handleLogout}>Logout</Button>
        {/* </Button> */}
      </HStack>
    </VStack>
  );
};

export default Home;
