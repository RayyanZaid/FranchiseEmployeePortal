import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const fontStyles = {
  fontFamily: "Gabarito",
};

const global_text_styles = StyleSheet.create({
  titleText: {
    ...fontStyles,
    fontSize: 36,
    fontWeight: "bold",
    color: "black",
    margin: screenHeight * 0.02,
    padding: 10,
    width: screenWidth * 0.5,
    textAlign: "center",
  },

  input: {
    ...fontStyles,
    height: screenHeight * 0.08,
    width: screenWidth * 0.8,
    borderWidth: 1,
    padding: 10,
    marginTop: screenHeight * 0.04,
    borderWidth: 3,
    fontSize: 18,
  },

  label: {
    ...fontStyles,
    height: screenHeight * 0.05,
    width: screenWidth * 0.7,
    marginTop: screenHeight * 0.04,
    paddingLeft: screenWidth * 0.03,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 16,
  },

  buttonText: {
    ...fontStyles,
    color: "black",
    fontSize: screenHeight * 0.03,
    fontWeight: "bold",
    textAlign: "center",
  },

  regular: {
    ...fontStyles,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },

  regular_blue: {
    ...fontStyles,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default global_text_styles;
