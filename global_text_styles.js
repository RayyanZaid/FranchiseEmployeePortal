import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const global_text_styles = StyleSheet.create({
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "black",
    margin: screenHeight * 0.02, // Adjust this value to reduce vertical spacing
    padding: 10,
    width: screenWidth * 0.5,
    textAlign: "center",
  },

  input: {
    height: screenHeight * 0.05,
    width: screenWidth * 0.7,

    borderWidth: 1,
    padding: 10,
    borderRadius: 30, // Adjust the border radius as needed
    borderWidth: 3,
  },

  label: {
    height: screenHeight * 0.05,
    width: screenWidth * 0.7,
    marginTop: screenHeight * 0.04,
    paddingLeft: screenWidth * 0.03,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default global_text_styles;
