import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DataContextProvider from "../contexts/DataContext";
import AddTodo from "../Screens/AddTodo";
import HomeScreen from "./../Screens/HomeScreen";
import TodoDetails from "./../Screens/TodoDetails";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <DataContextProvider>
        <Screens />
      </DataContextProvider>
    </NavigationContainer>
  );
}

const Screens = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ animation: "fade_from_bottom" }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={TodoDetails} />
      <Stack.Screen name="AddTodo" component={AddTodo} />
    </Stack.Navigator>
  );
};
