import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./../Screens/HomeScreen";
import TodoDetails from "./../Screens/TodoDetails";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}

const Screens = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={TodoDetails} />
    </Stack.Navigator>
  );
};
