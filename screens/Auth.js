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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import AuthTextFields from "../components/AuthTextFields";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import global_text_styles from "../global_text_styles";
import global_button_styles from "../global_button_styles";
import global_image_styles from "../global_image_styles";

import DropdownComponent from "../components/Dropdown";
import SignUpComponent from "../components/SignUpComponent";

const AuthScreen = () => {
  const navigation = useNavigation();

  const [roleFromChild, setRoleFromChild] = useState("");
  const [phoneFromChild, setPhoneFromChild] = useState("");
  const [passwordFromChild, setPasswordFromChild] = useState("");
  const [codeFromChild, setCodeFromChild] = useState("");

  const [isSignIn, setIsSignIn] = useState(true);

  const handleRoleChange = (role) => {
    setRoleFromChild(role);
  };
  const handlePhoneChange = (phone) => {
    setPhoneFromChild(phoneFromChild);
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
      <Image
        style={global_image_styles.jackLogo}
        source={require("../assets/jackhead.png")}
      />
      <View style={styles.buttonContainer}></View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <DropdownComponent onRoleChange={handleRoleChange} />

        <AuthTextFields
          onPhoneChange={handlePhoneChange}
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
            onPress={() => console.log("User clicked Sign in")}
          >
            <Text style={global_text_styles.buttonText}>Sign in</Text>
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
            onPress={() => console.log("User clicked Sign up")}
          >
            <Text style={global_text_styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        )}

        {isSignIn === true && (
          <View
            style={{
              marginTop: screenHeight * 0.03,
              marginBottom: screenHeight * 0.01,
              borderRadius: 20,
            }}
          >
            <Text style={global_text_styles.regular}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              style={{
                marginTop: screenHeight * 0.01,
              }}
              onPress={() => setIsSignIn(false)}
            >
              <Text style={global_text_styles.regular_blue}>Sign up</Text>
            </TouchableOpacity>
          </View>
        )}

        {isSignIn === false && (
          <View
            style={{
              marginTop: screenHeight * 0.03,
              marginBottom: screenHeight * 0.01,
              borderRadius: 20,
            }}
          >
            <Text style={global_text_styles.regular}>
              Already have an account?
            </Text>

            <TouchableOpacity
              style={{
                marginTop: screenHeight * 0.01,
              }}
              onPress={() => setIsSignIn(true)}
            >
              <Text style={global_text_styles.regular_blue}>Sign in</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 0 : 20, // Adjust paddingTop for iOS
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
