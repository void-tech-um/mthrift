import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpPage from "../screens/SignUpPage";
import Login from "../screens/LoginPage";

const Stack = createNativeStackNavigator();

function Authenticate() {
  return (
    <Stack.Navigator initialRouteName="Authenticate">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  );
}

export default Authenticate;
