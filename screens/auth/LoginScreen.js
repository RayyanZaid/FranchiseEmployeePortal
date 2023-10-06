import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components

import AuthTextFields from "../../components/AuthTextFields";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.LoginText}>Login</Text>
      <AuthTextFields />
      <Button title="Sign Up" onPress={goToSignUpScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Background color
  },
  LoginText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Text color
  },
});

export default LoginScreen;
