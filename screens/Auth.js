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
import {
  validateSignInFields,
  validateSignUpFields,
} from "../errorhandling/autherrors";
const AuthScreen = () => {
  const navigation = useNavigation();

  const [roleFromChild, setRoleFromChild] = useState("");
  const [phoneFromChild, setPhoneFromChild] = useState("");
  const [passwordFromChild, setPasswordFromChild] = useState("");
  const [codeFromChild, setCodeFromChild] = useState("");
  const [isPhoneLength10, setIsPhoneLength10] = useState(false);
  const [verification, setVerification] = useState("");

  const [isSignIn, setIsSignIn] = useState(true);

  const handleRoleChange = (role) => {
    setRoleFromChild(role);
  };
  const handlePhoneChange = (phone) => {
    setPhoneFromChild(phone);

    if (phone.length === 10) {
      setIsPhoneLength10(true);
    } else {
      setIsPhoneLength10(false);
    }
  };

  const handlePasswordChange = (password) => {
    setPasswordFromChild(password);
  };

  const handleCodeChange = (code) => {
    setCodeFromChild(code);
  };

  const onSendVerificationCode = () => {
    console.log("Sent a 4-digit code to your phone");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.buttonContainer}></View>

      <View style={styles.leftSemicircle} />
      <View style={styles.rightSemicircle} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.horizontalContainer}>
          <Image
            style={global_image_styles.jackLogoRightTilt}
            source={require("../assets/jackhead.png")}
          />
          <DropdownComponent onRoleChange={handleRoleChange} />
          <Image
            style={global_image_styles.jackLogoLeftTilt}
            source={require("../assets/jackhead.png")}
          />
        </View>

        <AuthTextFields
          onPhoneChange={handlePhoneChange}
          onPasswordChange={handlePasswordChange}
        />

        {isPhoneLength10 && !isSignIn && (
          <View>
            <TextInput
              style={global_text_styles.input}
              onChangeText={setVerification}
              value={verification}
              placeholder="Verification Code"
              keyboardType="phone-pad"
              placeholderTextColor="black"
              maxLength={4}
            />
            <TouchableOpacity
              style={{
                marginTop: screenHeight * 0.01,
              }}
              onPress={onSendVerificationCode}
            >
              <Text style={global_text_styles.regular_blue}>
                Send Verification Code
              </Text>
            </TouchableOpacity>
          </View>
        )}

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
              width: screenWidth * 0.8,
            }}
            onPress={() =>
              console.log(
                validateSignInFields(
                  roleFromChild,
                  phoneFromChild,
                  passwordFromChild
                )
              )
            }
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
              width: screenWidth * 0.8,
            }}
            onPress={() =>
              console.log(
                validateSignUpFields(
                  roleFromChild,
                  phoneFromChild,
                  passwordFromChild,
                  verification,
                  codeFromChild
                )
              )
            }
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

  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AuthScreen;
