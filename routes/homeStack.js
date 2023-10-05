import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import SplashScreen from "../SplashScreen";
import WelcomeScreen from "../screens/Welcome";

const screens = {
  Splash: {
    screen: SplashScreen,
  },

  Welcome: {
    screen: WelcomeScreen,
  },
};

const HomeStack = createStackNavigator(screens);

// wrap in app container

export default NavigationContainer(HomeStack); // component that the app can render. give all info about screen navigation stack
