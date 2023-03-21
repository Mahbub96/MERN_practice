import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import * as cacheStore from "expo-secure-store";
import { useEffect, useState } from "react";
import client from "../API/client";
import { useDataContext } from "../context/DataContext";
import { Text, VStack } from "native-base";

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { setLoading, auth, setAuth } = useDataContext();

  useEffect(() => {
    (async () => {
      const token = await cacheStore.getItemAsync("accessToken");
      client
        .get("auth", { headers: { Authorization: token } })
        .then((res) => {
          const { error } = res.data;
          if (error) {
          } else {
            setAuth(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    })();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
      {auth ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "jfgkdjhgkd",
          }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
