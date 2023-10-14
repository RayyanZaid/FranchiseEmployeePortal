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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import AuthTextFields from "../components/AuthTextFields";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import global_text_styles from "../global_text_styles";
import global_button_styles from "../global_button_styles";

import DropdownComponent from "../components/Dropdown";
import SignUpComponent from "../components/SignUpComponent";

const AuthScreen = () => {
  const navigation = useNavigation();

  const [roleFromChild, setRoleFromChild] = useState("");
  const [emailFromChild, setEmailFromChild] = useState("");
  const [passwordFromChild, setPasswordFromChild] = useState("");
  const [codeFromChild, setCodeFromChild] = useState("");

  const [isSignIn, setIsSignIn] = useState(true);

  const handleRoleChange = (role) => {
    setRoleFromChild(role);
  };
  const handleEmailChange = (email) => {
    setEmailFromChild(email);
  };

  const handlePasswordChange = (password) => {
    setPasswordFromChild(password);
  };

  const handleCodeChange = (code) => {
    setCodeFromChild(code);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: isSignIn ? "yellow" : "white",
            marginHorizontal: 10,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => setIsSignIn(true)} // Wrap in an arrow function
        >
          <Text style={global_button_styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: isSignIn ? "white" : "yellow",
            marginHorizontal: 10,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => setIsSignIn(false)} // Wrap in an arrow function
        >
          <Text style={global_button_styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={global_text_styles.titleText}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </Text>

        <DropdownComponent onRoleChange={handleRoleChange} />

        <AuthTextFields
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
        />

        {isSignIn === false && (
          <SignUpComponent
            onChangeCodeParent={handleCodeChange}
            roleFromParent={roleFromChild}
          />
        )}

        {isSignIn === true && (
          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
              marginTop: screenHeight * 0.05,
              borderRadius: 20,
              padding: 10,
              width: screenWidth * 0.9,
            }}
            onPress={() => console.log("User clicked Sign In")} // Wrap in an arrow function
          >
            <Text style={global_button_styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        )}

        {isSignIn === false && (
          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
              marginTop: screenHeight * 0.05,
              borderRadius: 20,
              padding: 10,
              width: screenWidth * 0.9,
            }}
            onPress={() => console.log(codeFromChild)} // Wrap in an arrow function
          >
            <Text style={global_button_styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFEDF5",
    paddingTop: Platform.OS === "ios" ? 0 : 20, // Adjust paddingTop for iOS
    width: screenWidth,
    height: screenHeight,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
});

export default AuthScreen;
