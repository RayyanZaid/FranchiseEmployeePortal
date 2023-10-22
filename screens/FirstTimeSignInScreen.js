import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import InputBoxComponent from "../components/InputBoxComponent";
import ImageUploadComponent from "../components/ImageUploadComponent";
import global_text_styles from "../global_text_styles";
import global_button_styles from "../global_button_styles";

import { validateFirstTimeLogin } from "../functions/auth/autherrors";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const FirstTimeSignIn = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);
  const [error, setError] = useState(""); // State for error message

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleImageUpload = () => {
    setImageUploaded(true);
  };

  const handleImageDelete = () => {
    setImageUploaded(false);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const saveProfileInfoAndContinue = () => {
    const response = validateFirstTimeLogin(firstName, lastName, imageUploaded);
    if (response === "Good") {
      navigation.navigate("Home");
    } else {
      setError(response); // Set the error message
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <Text style={global_text_styles.buttonText}>
          Enter your Profile Information
        </Text>
        <View style={styles.inputBoxArea}>
          <InputBoxComponent
            value={firstName}
            placeholder="First name"
            onChangeParent={handleFirstNameChange}
          />
          <InputBoxComponent
            value={lastName}
            placeholder="Last name"
            onChangeParent={handleLastNameChange}
          />

          {error && <Text style={global_text_styles.errorText}>{error}</Text>}
        </View>
        <ImageUploadComponent
          onImageUpload={handleImageUpload}
          onImageDelete={handleImageDelete}
        />
        <TouchableOpacity
          style={global_button_styles.signUpButton}
          onPress={() => {
            setError(""); // Clear any previous error message
            saveProfileInfoAndContinue();
          }}
        >
          <Text style={global_text_styles.buttonText}>
            Save Profile Information
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default FirstTimeSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: screenHeight * 0.05,
    backgroundColor: "#fff",
  },

  inputBoxArea: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: screenHeight * 0.02,
  },
});
