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

import InputBoxComponent from "../components/InputBoxComponent";
const FirstTimeSignIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };
  return (
    <View>
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
  );
};

export default FirstTimeSignIn;
