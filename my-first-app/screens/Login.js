import * as cacheStore from 'expo-secure-store';
import { Button, Input, Text, VStack } from "native-base";
import { useState } from "react";

import client from "../API/client";
const Login = () => {
  const [user, setUser] = useState({ ID: "", Pass: "" });
  const handleSubmit = () => {
    client
      .post("auth/login", user)
      .then((res) => {
        const token = res.data.accessToken;

        cacheStore.setItemAsync("accessToken", token);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

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
