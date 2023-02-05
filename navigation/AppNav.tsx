import React from "react";
import TabNavigator from "../components/TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../screens/ProfilePage";
import HomePage from "../screens/HomePage";
import ItemPage from "../screens/ItemPage";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

/* Placeholders for the screens */
const Chat = () => {
  return <Text>Chat</Text>;
};
/* end placeholders */

interface INavScreenProps {
  name: string;
  options: { headerShown: boolean };
  component: React.ComponentType;
}

const NavScreen: React.FC<INavScreenProps> = ({ name, options, component }) => {
  const Component = component;
  return <Component />;
};

function TabNav() {
  return (
  <TabNavigator>
    <NavScreen name="Home" options={{ headerShown:  false}} component={HomePage} />
    <NavScreen name="Chat" options={{ headerShown:  false}} component={Chat} />
    <NavScreen name="Profile" options={{ headerShown:  false}} component={ProfilePage} />
  </TabNavigator>
);
}

function AppNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Tabs" options={{ headerShown:  false}} component={TabNav} />
      <Stack.Screen name="Item" options={{ headerShown:  false}} component={ItemPage} />
    </Stack.Navigator>
  );
}

export default AppNav;
