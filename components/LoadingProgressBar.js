import React, { useEffect, useState } from "react";
import { View, Animated, Easing, Text, StyleSheet } from "react-native";

const LoadingProgressBar = ({ duration }) => {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [progress, duration]);

  const progressStyle = {
    width: progress.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.progressBar, progressStyle]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    backgroundColor: "#fff",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#EDA291",
    borderRadius: 20,
  },
});

export default LoadingProgressBar;
