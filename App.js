import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, Alert, Button } from "react-native";

export default function App() {
  console.log("App Executed");

  let x = 1;
  x.toString();

  console.log(require('./assets/logo.png'))
  return (
    <SafeAreaView style={styles.container}>
      <Button title="String" color="orange" 
      onPress={() => Alert.alert("My title" , "My message" ,[
        {text: "Yes"} , {text: "No"}
      ] )}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
