import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import global_text_styles from "../../global_text_styles";
import global_button_styles from "../../global_button_styles";
import { useNavigation } from "@react-navigation/native";
import AuthTextFields from "../../components/AuthTextFields";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [emailFromChild, setEmailFromChild] = useState("");
  const [passwordFromChild, setPasswordFromChild] = useState("");

  const handleEmailChange = (email) => {
    setEmailFromChild(email);
  };

  const handlePasswordChange = (password) => {
    setPasswordFromChild(password);
  };

  const goToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={global_text_styles.titleText}>Sign Up</Text>

        <AuthTextFields
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
        />
        <Text>Email from Child: {emailFromChild}</Text>
        <Text>Password from Child: {passwordFromChild}</Text>
        <Button title="Sign Up" onPress={goToSignUpScreen} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default SignUpScreen;
