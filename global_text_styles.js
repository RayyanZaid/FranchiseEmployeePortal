import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const global_text_styles = StyleSheet.create({
  titleText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    margin: screenHeight * 0.04,
    padding: 10,
    width: screenWidth * 0.5,
    textAlign: "center",
  },

  input: {
    height: screenHeight * 0.05,
    width: screenWidth * 0.7,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 18, // Adjust the border radius as needed
    borderWidth: 3,
  },

  label: {
    height: screenHeight * 0.05,
    width: screenWidth * 0.7,
    marginTop: screenHeight * 0.05,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default global_text_styles;
