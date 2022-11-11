import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./SignUp";
import Login from "./LoginPage";



const Stack = createNativeStackNavigator();

function Authenticate() {
  return (
      <Stack.Navigator initialRouteName="Authenticate">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
  );
}

export default Authenticate;
