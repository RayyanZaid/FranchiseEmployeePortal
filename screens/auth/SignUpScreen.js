import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>SignUpScreen</Text>
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

export default SignUpScreen;
