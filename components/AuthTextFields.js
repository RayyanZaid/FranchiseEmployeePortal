import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
} from "react-native";

import global_text_styles from "../global_text_styles";

import Icon from "react-native-vector-icons/Feather";
import { Dropdown } from "react-native-element-dropdown";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AuthTextFields = ({ onPhoneChange, onPasswordChange }) => {
  const [rawPhone, setRawPhone] = useState("");
  const [formattedPhone, setFormattedPhone] = useState("");
  const [password, onChangePassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [verification, setVerification] = useState("");

  const handlePhoneInputChange = (text) => {
    const raw = text.replace(/\D/g, "");

    const areaCode = raw.substr(0, 3);

    const middlePart = raw.substr(3, 3);

    const lastPart = raw.substr(6, 4);

    // formatting logic to maintain (___)-___-____ format
    let formatted = text;
    if (raw.length <= 3) {
      formatted = `(${areaCode})-`;
    } else if (raw.length <= 6) {
      formatted = `(${areaCode})-${middlePart}`;
    } else if (raw.length <= 10) {
      formatted = `(${areaCode})-${middlePart}-${lastPart}`;
    }

    setRawPhone(raw);
    setFormattedPhone(formatted);
    console.log(raw);
    onPhoneChange(raw);
  };

  const handlePasswordInputChange = (text) => {
    onChangePassword(text);
    onPasswordChange(text);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={global_text_styles.input}
        onChangeText={handlePhoneInputChange}
        value={rawPhone.length === 10 ? formattedPhone : rawPhone}
        placeholder="Phone number: (___)-___-____"
        keyboardType="phone-pad"
        placeholderTextColor="black"
        maxLength={14} // Limit to the (___)-___-____ format
      />

      <View style={styles.passwordInput}>
        <TextInput
          style={global_text_styles.input}
          onChangeText={handlePasswordInputChange}
          value={password}
          placeholder="Enter your password"
          keyboardType="default"
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="black"
        />

        <View style={styles.eyeIcon}>
          <Icon
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={30}
            color="black"
            onPress={togglePasswordVisibility}
          />
        </View>
      </View>

      <TextInput
        style={global_text_styles.input}
        onChangeText={setVerification}
        value={verification}
        placeholder="Verification Code"
        keyboardType="phone-pad"
        placeholderTextColor="black"
        maxLength={4} // Limit to the (___)-___-____ format
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    bottom: screenHeight * 0.015,
    right: 10,
  },
});

export default AuthTextFields;
