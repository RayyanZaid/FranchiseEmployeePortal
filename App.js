import React, { useState, useEffect } from "react";
import { SafeAreaView, Button, Alert, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import SplashScreen from "./SplashScreen";
import AuthScreen from "./screens/Auth";
import FirstTimeSignIn from "./screens/FirstTimeSignInScreen";

import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const navigationRef = useNavigationContainerRef();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const [fontsLoaded] = useFonts({
    Gabarito: require("./assets/fonts/Gabarito-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded && isLoading) {
      return;
    }
  }, [fontsLoaded, isLoading]);

  const Stack = createNativeStackNavigator();
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
            />
            <Stack.Screen
              name="FirstTimeSignIn"
              component={FirstTimeSignIn}
              options={{
                headerShown: false,
                animation: "none",
              }}
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
    backgroundColor: "#fff",
  },
});
