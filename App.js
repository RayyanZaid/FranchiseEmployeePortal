import React, { useState, useEffect } from "react";
import { SafeAreaView, Button, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens

import SplashScreen from "./SplashScreen";
import WelcomeScreen from "./screens/Welcome";
import LoginScreen from "./screens/auth/LoginScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
// Navigator
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
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <SplashScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}
