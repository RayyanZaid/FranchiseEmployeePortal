import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>

      <Button title="Login" onPressed={() => console.log("Click")}></Button>

      <Button title="Sign Up" onPressed={() => console.log("Click")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Background color
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Text color
  },
});

export default WelcomeScreen;
