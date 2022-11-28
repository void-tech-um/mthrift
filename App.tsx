import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import SecureStore from "expo-secure-store";

import Authenticate from "./navigation/Authenticate";
import AppNav from "./navigation/AppNav";
import React from "react";
import axios from "axios";

interface IAuthContext {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
}

const AuthContext = React.createContext<IAuthContext>(null!);

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
          const response = await axios.post("FIX_ME", data);
          const { token } = response.data;
          await SecureStore.setItemAsync("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          dispatch({ type: "SIGN_IN", token });
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
          const response = await axios.post("FIX_ME", data);
          const { token } = response.data;
          await SecureStore.setItemAsync("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          dispatch({ type: "SIGN_IN", token });
        } catch (e) {
          // TODO: Handle error
          console.log(e);
        }
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      {state.isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {state.userToken == null ? (
            // No token found, user isn't signed in
            <Authenticate />
          ) : (
            // User is signed in
            <AppNav />
          )}
        </NavigationContainer>
      )}
    </AuthContext.Provider>
  );
}
