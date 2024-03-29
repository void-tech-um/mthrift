import {
  NavigationContainer,
  useNavigationBuilder,
} from "@react-navigation/native";
import { Text, View } from "react-native";
import SecureStore from "expo-secure-store";

import Authenticate from "./navigation/Authenticate";
import AppNav from "./navigation/AppNav";
import React from "react";
import axios from "axios";
import ItemPage from "./screens/ItemPage";

interface IAuthContext {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
}
//typescript interface for passing user info to other components
interface UserInfo {
  info: any;
  setInfo: any;
}
//export the user context so it can be imported in other components
export const UserContext = React.createContext<UserInfo>(null!);
export const AuthContext = React.createContext<IAuthContext>(null!);

export const useUserContext = () => React.useContext(UserContext);
export const useAuth = () => React.useContext(AuthContext);

function SplashScreen() {
  return (
    // Center the content
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
}

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any): any => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        const userToken = await SecureStore.getItemAsync("token");
        console.log("token", userToken);
        // TODO: Check if token is valid by making a request to the server and if it is not valid, delete the token from the secure store

        // Set the token in the axios header, so all are future requests will have the token
        axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        // Change the state to restore the token and set the loading to false
        dispatch({ type: "RESTORE_TOKEN", token: userToken });
      } catch (e) {
        console.log("invalid token", e);
        dispatch({ type: "RESTORE_TOKEN", token: null });
      }
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        // Make a request to the server to sign in the user
        // Get the token from the response
        // Save the token in the secure store and in the axios header
        // Change the state to indicate the user is signed in
        try {
          // const response = await axios.post(
          //   "http://35.1.157.178:8000/api/auth/login",
          //   data
          // );
          // const { token } = response.data;
          // await SecureStore.setItemAsync("token", token);
          // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          dispatch({ type: "SIGN_IN", token: "test" });
        } catch (e) {
          // TODO: Handle error
          console.log(e);
        }
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data: any) => {
        // Make a request to the server to sign up the user
        // Get the token from the response
        // Save the token in the secure store and in the axios header
        // Change the state to indicate the user is signed in
        try {
          // const response = await axios.post(
          //   "http://35.1.157.178:8000/api/auth/signup",
          //   data
          // );
          // const { token } = response.data;
          // await SecureStore.setItemAsync("token", token);
          // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          dispatch({ type: "SIGN_IN", token: "test" });
        } catch (e) {
          // TODO: Handle error
          console.log(e);
        }
      },
    }),
    []
  );

  //maintain the user information in the app component
  const [info, setInfo] = React.useState();

  // gives the children access to the auth context functions
  return (
    <AuthContext.Provider value={authContext}>
      <UserContext.Provider value={{ info, setInfo }}>
        {state.isLoading ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            {state.userToken === null ? (
              // No token found, user isn't signed in
              // First thing user sees
              <Authenticate />
            ) : (
              // User is signed in
              <AppNav />
            )}
          </NavigationContainer>
        )}
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
