import { SafeAreaView, StyleSheet } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Lists from "./components/Lists";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Lists />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  img: {
    height: 100,
    width: 100,
  },
});
