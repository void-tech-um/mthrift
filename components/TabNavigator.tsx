import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

interface ITabNavigatorChild {
  props: {
    name: string;
    component: () => JSX.Element;
  };
}

interface ITabNavigatorProps {
  children: ITabNavigatorChild[];
}

function TabNavigator({ children }: ITabNavigatorProps) {
  return (
    <Tab.Navigator
      initialRouteName="Authenticate"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Chat") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return (
            <View
              style={{
                borderRadius: 10,
                backgroundColor: focused ? "#cfcfcf" : "#fff",
                width: "70%",
                height: "80%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={{
                  fontSize: 40,
                  marginTop: 5,
                }}
              />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00274c",
        tabBarInactiveTintColor: "gray",
        tabBarIconStyle: {
          borderRadius: 50,
          backgroundColor: "#fff",
        },
        tabBarStyle: {
          borderRadius: 50,
          position: "absolute",
          left: "10%",
          right: "10%",
          bottom: "5%",
          paddingHorizontal: 30,
          paddingBottom: 0,
          // shadow properties
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 15,
        },
      })}
    >
      {children.map((child: ITabNavigatorChild) => {
        return (
          <Tab.Screen
            key={child.props.name}
            name={child.props.name}
            component={child.props.component}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default TabNavigator;
