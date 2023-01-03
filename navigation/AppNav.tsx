import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import ProfilePage from "../screens/ProfilePage";
import HomePage from "../screens/HomePage";


/* Placeholders for the screens */
const Chat = () => {
  return <Text>Chat</Text>;
};
/* end placeholders */

const Tab = createBottomTabNavigator();

function AppNav() {
  return (
    <Tab.Navigator initialRouteName="Authenticate">
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default AppNav;
