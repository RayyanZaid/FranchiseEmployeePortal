import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const global_button_styles = StyleSheet.create({
  signUpButton: {
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
    backgroundColor: "lightblue",
    marginTop: screenHeight * 0.05,
    borderRadius: 20,
    padding: 10,
    width: screenWidth * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },

  smallButton: {
    backgroundColor: "lightblue",
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
    width: screenWidth * 0.4,
    height: screenHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
    margin: screenHeight * 0.05,
  },
});

export default global_button_styles;
