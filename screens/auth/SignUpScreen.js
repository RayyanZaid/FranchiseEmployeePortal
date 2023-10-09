import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import global_text_styles from "../../global_text_styles";
import global_button_styles from "../../global_button_styles";
const SignUpScreen = () => {
  const [role, onSelectedRole] = useState("");

  const [name, setName] = useState("");

  const [test, onChangeTest] = useState("");
  const sendRequest = async () => {
    try {
      const response = await fetch(
        `http://192.168.4.45:8080/playground/hello/`,
        {
          method: "GET", // Change to GET method
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        print("Good");
      } else {
        console.error("Failed to send request");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={global_text_styles.titleText}>Sign Up</Text>

      <TouchableOpacity
        style={global_button_styles.signUpButton}
        onPress={() => {
          onSelectedRole("Employee");
          sendRequest();
        }}
      >
        <Text style={global_button_styles.buttonText}>Employee</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={global_button_styles.signUpButton}
        onPress={() => {
          onSelectedRole("Manager");
          sendRequest();
        }}
      >
        <Text style={global_button_styles.buttonText}>Manager</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={global_button_styles.signUpButton}
        onPress={() => {
          onSelectedRole("Admin");
          sendRequest();
        }}
      >
        <Text style={global_button_styles.buttonText}>Admin</Text>
      </TouchableOpacity>
      <TextInput
        style={global_text_styles.input}
        onChangeText={onChangeTest}
        value={test}
        placeholder="Enter name test"
        keyboardType="default"
      />
      <Text>{name}</Text>

      <Text style={global_button_styles.buttonText}>Submit</Text>

      <TouchableOpacity
        style={global_button_styles.signUpButton}
        onPress={() => {
          sendRequest();
        }}
      >
        <Text style={global_button_styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default SignUpScreen;
