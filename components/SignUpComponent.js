import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  SafeAreaView,
} from "react-native";
import global_text_styles from "../global_text_styles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SignUpComponent = ({ onChangeCodeParent, roleFromParent }) => {
  const [code, onChangeCode] = useState("");

  const handleCodeInputChange = (text) => {
    onChangeCode(text);
    onChangeCodeParent(text);
  };

  let placeHolderText = "";

  if (roleFromParent === "Admin") {
    placeHolderText = "Enter your code here: ";
  } else if (roleFromParent === "Employee") {
    placeHolderText = "Restaurant number: ex. JIB 3421";
  } else if (roleFromParent === "Manager") {
    placeHolderText = "Code from your district manager";
  } else {
    placeHolderText = "Select your role from the top.";
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={global_text_styles.input}
        onChangeText={handleCodeInputChange}
        value={code}
        placeholder={placeHolderText}
        keyboardType="default"
        placeholderTextColor="black"
      />
    </SafeAreaView>
  );
};

export default SignUpComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});
