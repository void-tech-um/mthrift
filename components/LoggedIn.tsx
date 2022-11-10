import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return ( <Text>
    Home
  </Text>);
}

const Chat = () => {
  return ( <Text>
    Chat
  </Text>);
}

const Profile = () => {
  return ( <Text>
    Profile
  </Text>);
}

const Tab = createBottomTabNavigator();

  function HomeNav () {
    return (
        <Tab.Navigator initialRouteName="Authenticate">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
  }
  
  export default HomeNav;