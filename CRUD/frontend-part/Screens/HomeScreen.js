import { StyleSheet, View } from "react-native";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Lists from "./../components/Lists";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Lists />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
    justifyContent: "space-between",
  },
  img: {
    height: 100,
    width: 100,
  },
});
