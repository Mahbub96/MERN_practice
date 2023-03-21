import * as cacheStore from "expo-secure-store";
import { Button, Input, Spinner, Text, VStack } from "native-base";
import { useState } from "react";

import client from "../API/client";
import { useDataContext } from "../context/DataContext";
const Login = () => {
  const { loading, setAuth } = useDataContext();
  const [user, setUser] = useState({ ID: "", Pass: "" });
  const handleSubmit = () => {
    client
      .post("auth/login", user)
      .then(async (res) => {
        const { accessToken, ID } = res.data;
        await cacheStore.setItemAsync("accessToken", accessToken);
        setAuth(ID);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

  if (loading) {
    return (
      <VStack flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text>
          <Spinner />
        </Text>
      </VStack>
    );
  }

  return (
    <VStack p={12} flex={1} justifyContent={"space-around"}>
      <VStack>
        <Text fontSize="lg">Welcome</Text>
        <Text fontSize="sm">This is JWT</Text>
      </VStack>
      <VStack>
        <Input
          placeholder="User ID"
          onChangeText={(txt) => setUser((prev) => ({ ...prev, ID: txt }))}
        />
        <Input
          placeholder="password"
          onChangeText={(txt) => setUser((prev) => ({ ...prev, Pass: txt }))}
        />
      </VStack>
      <VStack>
        <Button onPress={handleSubmit}>Log In</Button>
      </VStack>
    </VStack>
  );
};

export default Login;
