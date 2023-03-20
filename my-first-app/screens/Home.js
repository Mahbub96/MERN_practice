import { Button, HStack, VStack } from "native-base";
import React from "react";
import * as cacheStore from 'expo-secure-store';


const Home = ({ navigation }) => {
  return (
    <VStack>
      <HStack>
        <Button onPress={() => navigation.navigate("Login")}>
          Go To Login
          
        </Button>
      </HStack>
    </VStack>
  );
};

export default Home;
