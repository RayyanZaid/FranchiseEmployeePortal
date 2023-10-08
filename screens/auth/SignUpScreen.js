import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import global_text_styles from "../../global_text_styles";
import global_button_styles from "../../global_button_styles";
const SignUpScreen = () => {
  const [role, onSelectedRole] = useState("");

  const [name, setName] = useState("");

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
        const data = await response.json();
        const nameFromDjango = data["name"];
        setName(nameFromDjango);
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

      <Text>{name}</Text>
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
