import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View, // Import View
} from "react-native";

import global_text_styles from "../global_text_styles";

import Icon from "react-native-vector-icons/Feather";
import { Dropdown } from "react-native-element-dropdown";

const AuthTextFields = ({ onEmailChange, onPasswordChange }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleEmailInputChange = (text) => {
    onChangeEmail(text);
    onEmailChange(text); // Send email data to the parent
  };

  const handlePasswordInputChange = (text) => {
    onChangePassword(text);
    onPasswordChange(text); // Send password data to the parent
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
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
        placeholderTextColor="black"
      />

      <Text style={global_text_styles.label}>Password</Text>
      <View style={styles.passwordInput}>
        <TextInput
          style={global_text_styles.input}
          onChangeText={handlePasswordInputChange}
          value={password}
          placeholder="Enter your password"
          keyboardType="default"
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="black"
        />
        <View style={styles.eyeIcon}>
          <Icon
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={30}
            color="black"
            onPress={togglePasswordVisibility}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10, // Adjust this value to position the icon as needed
  },
});

export default AuthTextFields;
