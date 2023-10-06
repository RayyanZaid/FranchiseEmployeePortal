import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import AuthTextFields from "../../components/AuthTextFields";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import global_text_styles from "../../global_text_styles";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={global_text_styles.titleText}>Login</Text>

        <AuthTextFields />
        <Button title="Sign Up" onPress={goToSignUpScreen} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default LoginScreen;
