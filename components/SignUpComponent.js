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
    onChangeCodeParent(text); // Send email data to the parent
  };

  let labelText = ""; // Initialize the label text variable
  let placeHolderText = "";

  // Check the value of roleFromParent and set the label text accordingly
  if (roleFromParent === "Admin") {
    labelText = "Enter your Admin Code";
    placeHolderText = "Enter your code here: ";
  } else if (roleFromParent === "Employee") {
    labelText = "Enter your restaurant name";
    placeHolderText = "JIB___";
  } else if (roleFromParent === "Manager") {
    labelText = "Enter your restaurant code ";
  } else {
    labelText = "Select your role from the top.";
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={global_text_styles.label}>{labelText}</Text>
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
