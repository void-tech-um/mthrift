import React from "react";
import TabNavigator from "../components/TabNavigator";
import ProfilePage from "../screens/ProfilePage";
import HomePage from "../screens/HomePage";
import { Text } from "react-native";

/* Placeholders for the screens */
const Chat = () => {
  return <Text>Chat</Text>;
};
/* end placeholders */

interface INavScreenProps {
  name: string;
  component: React.ComponentType;
}

const NavScreen: React.FC<INavScreenProps> = ({ name, component }) => {
  const Component = component;
  return <Component />;
};

function AppNav() {
  return (
    <TabNavigator>
      <NavScreen name="Home" component={HomePage} />
      <NavScreen name="Chat" component={Chat} />
      <NavScreen name="Profile" component={ProfilePage} />
    </TabNavigator>
  );
}

export default AppNav;
