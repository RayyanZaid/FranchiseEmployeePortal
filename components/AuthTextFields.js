import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

import global_text_styles from "../global_text_styles";

const AuthTextFields = ({ onEmailChange, onPasswordChange }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const handleEmailInputChange = (text) => {
    onChangeEmail(text);
    onEmailChange(text); // Send email data to the parent
  };

  const handlePasswordInputChange = (text) => {
    onChangePassword(text);
    onPasswordChange(text); // Send password data to the parent
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={global_text_styles.label}>Email</Text>
      <TextInput
        style={global_text_styles.input}
        onChangeText={handleEmailInputChange}
        value={email}
        placeholder="Enter your email"
        keyboardType="default"
      />

      <Text style={global_text_styles.label}>Password</Text>
      <TextInput
        style={global_text_styles.input}
        onChangeText={handlePasswordInputChange}
        value={password}
        placeholder="Enter your password"
        keyboardType="default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthTextFields;
