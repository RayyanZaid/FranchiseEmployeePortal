import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import LoadingProgressBar from "./components/LoadingProgressBar";

const loadingTime = 3000;
const SplashScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const loadingTask = setTimeout(() => {
      onLoadingComplete();
    }, loadingTime);

    return () => clearTimeout(loadingTask);
  }, [onLoadingComplete]);

  return (
    <View style={styles.container}>
      <Image style={styles.splashLogo} source={require("./assets/logo.png")} />

      <View style={styles.progressBarContainer}>
        <LoadingProgressBar duration={loadingTime} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFEDF5",
    alignItems: "center",
    justifyContent: "center",
  },
  splashLogo: {
    width: 300, // Adjust this to your desired size
    height: 300, // Adjust this to your desired size
  },
  progressBarContainer: {
    marginTop: "20%",
    width: "80%", // Adjust the width as needed
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
});

export default SplashScreen;
