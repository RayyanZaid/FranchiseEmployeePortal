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

import global_text_styles from "../global_text_styles";

const InputBoxComponent = ({ onChangeParent, placeholder }) => {
  const [value, setValue] = useState("");

  const handleValueChange = (text) => {
    setValue(text);
    onChangeParent(text);
  };
  return (
    <TextInput
      style={global_text_styles.input}
      onChangeText={handleValueChange}
      value={value}
      placeholder={placeholder}
      //   keyboardType=""
      placeholderTextColor="black"
    />
  );
};

export default InputBoxComponent;
