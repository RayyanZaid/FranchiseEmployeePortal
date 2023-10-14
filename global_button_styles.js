import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const global_button_styles = StyleSheet.create({
  signUpButton: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: screenWidth * 0.7,
    height: screenHeight * 0.08,
    justifyContent: "center",
    alignItems: "center",
    margin: screenHeight * 0.05,
  },
  buttonText: {
    color: "black",
    fontSize: screenHeight * 0.03,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default global_button_styles;
