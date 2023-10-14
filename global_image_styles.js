import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const global_image_styles = StyleSheet.create({
  jackLogo: {
    width: screenHeight * 0.15,
    height: screenHeight * 0.15,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default global_image_styles;
