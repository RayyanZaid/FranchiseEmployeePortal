import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
} from "react-native";

import global_text_styles from "../global_text_styles";

// Components
import DropdownComponent from "./Dropdown";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AuthTextFields = () => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [roleData, setRoleData] = React.useState("");

  const handleDataFromChild = (data) => {
    setRoleData(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DropdownComponent sendDataToParent={handleDataFromChild} />
      {/* <Text> Data from child : {roleData}</Text> */}

      <Text style={global_text_styles.label}>Email</Text>
      <TextInput
        style={global_text_styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter your email"
        keyboardType="default"
      />

      <Text style={global_text_styles.label}>Password</Text>
      <TextInput
        style={global_text_styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Enter your password"
        keyboardType="default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthTextFields;
