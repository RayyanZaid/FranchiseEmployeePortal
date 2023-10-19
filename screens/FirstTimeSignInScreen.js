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
    try {
      const response = validateFirstTimeLogin(
        firstName,
        lastName,
        imageUploaded
      );
      console.log(response);
      if (response === "Good") {
        navigation.navigate("Home");
      } else {
        // Handle the case where the sign-in failed
        console.log("Save Profile Failed: ", response);
      }
    } catch (error) {
      // Handle the case where network or other errors occur.
      console.error("Error during Save Profile: ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <Text style={global_text_styles.buttonText}>
          Enter you Profile Information
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
        </View>

        <ImageUploadComponent
          onImageUpload={handleImageUpload}
          onImageDelete={handleImageDelete}
        />
        <TouchableOpacity
          style={global_button_styles.signUpButton}
          onPress={() => saveProfileInfoAndContinue()}
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
    alignItems: "center",
    justifyContent: "center",
  },

  inputBoxArea: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: screenHeight * 0.02,
  },
});
