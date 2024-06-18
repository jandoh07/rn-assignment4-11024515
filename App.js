import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Login from "./components/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar style="auto" animated={true} backgroundColor="gray" />
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});
