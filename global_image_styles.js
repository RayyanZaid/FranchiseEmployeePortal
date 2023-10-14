import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const global_image_styles = StyleSheet.create({
  jackLogoRightTilt: {
    width: screenHeight * 0.05,
    height: screenHeight * 0.05,
    alignSelf: "flex-start",
    marginRight: screenWidth * 0.03,
    justifyContent: "center",

    transform: [{ rotate: "330deg" }],
  },
  jackLogoLeftTilt: {
    width: screenHeight * 0.05,
    height: screenHeight * 0.05,
    alignSelf: "flex-start",
    marginLeft: screenWidth * 0.03,
    justifyContent: "center",

    transform: [{ rotate: "30deg" }],
  },
});

export default global_image_styles;
