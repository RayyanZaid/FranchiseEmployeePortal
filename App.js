import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";

export default function App() {
  console.log("App Executed");

  let x = 1;
  x.toString();
  return (
    <View style={styles.container}>
      <Text>Nice</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "lightblue" : "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});
