import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import global_text_styles from "../../global_text_styles";
import global_button_styles from "../../global_button_styles";
const SignUpScreen = () => {
  const [role, onSelectedRole] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={global_text_styles.titleText}>Sign Up</Text>

      <TouchableOpacity
        style={global_button_styles.signUpButton}
        onPress={() => console.log("Employee")}
      >
        <Text style={global_button_styles.buttonText}>Employee</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={global_button_styles.signUpButton}
        onPress={() => console.log("Manager")}
      >
        <Text style={global_button_styles.buttonText}>Manager</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={global_button_styles.signUpButton}
        onPress={() => console.log("Admin")}
      >
        <Text style={global_button_styles.buttonText}>Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Background color
  },
});

export default SignUpScreen;
