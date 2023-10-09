import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import global_text_styles from "../../global_text_styles";
import global_button_styles from "../../global_button_styles";
import { useNavigation } from "@react-navigation/native";
import AuthTextFields from "../../components/AuthTextFields";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [role, setRole] = useState("");
  const goToSignUpScreen = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={global_text_styles.titleText}>Sign Up</Text>
      <AuthTextFields />
      <Button title="Back to Login" onPress={goToSignUpScreen} />
    </View>
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
