import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import DataContextProvider from "./context/DataContext";
import RootNavigator from "./navigators/RootNavigator";
import { DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";

export default function App() {
  return (
    <DataContextProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </DataContextProvider>
  );
}
