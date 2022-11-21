import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

/* Placeholders for the screens */
const Home = () => {
  return <Text>Home</Text>;
};

const Chat = () => {
  return <Text>Chat</Text>;
};

const Profile = () => {
  return <Text>Profile</Text>;
};
/* end placeholders */

const Tab = createBottomTabNavigator();

function AppNav() {
  return (
    <Tab.Navigator initialRouteName="Authenticate">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppNav;
