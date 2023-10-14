import React, { useState, useEffect } from "react";
import { SafeAreaView, Button, Alert, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens

import SplashScreen from "./SplashScreen";
import AuthScreen from "./screens/Auth";

// Navigatorr
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const navigationRef = useNavigationContainerRef();

  // Define the function to be executed when loading is complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <SplashScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={AuthScreen}
              options={{
                headerShown: false,
                animation: "none",
              }}
              a
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFEDF5",
  },
});
