import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
