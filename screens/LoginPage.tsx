import React, { useState } from "react";
import logo from "../assets/MTHRIFT.png";
import LoginError from "../components/LoginError";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
} from "react-native";
import { useAuth, UserContext } from "../App";
interface LoginPageProps {
  navigation: any;
}

const LoginPage = ({ navigation }: LoginPageProps) => {
  const [usernameEntered, setUsernameEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");
  const [errorCheck, setErrorCheck] = useState(false);
  const auth = useAuth();
  //button to eventually do validation check with database, to see if user exists (validate with emails
  //and passwords
  const onPress = () => {
    // if (usernameEntered === "" || passwordEntered === "") {
    //   console.log("Username or password is empty");
    //   setErrorCheck(true);
    //   setTimeout(() => {
    //     setErrorCheck(false);
    //   }, 2500);
    // } else {
    //   // we have username and password, login
      console.log("Username: " + usernameEntered);
      console.log("Password: " + passwordEntered);
      auth.signIn({username:usernameEntered, password:passwordEntered});
  };
  return (
    <View style={styles.container}>
      <LoginError errorCheck={errorCheck} />

      <Image source={logo} style={{ width: 10, height: 10 }} />

      <View style={styles.userInputContainer}>
        <Text
          style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}
        >
          Username: 
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
          }}
          onChangeText={setUsernameEntered}
        />
      </View>
      <View style={styles.userInputContainer}>
        <Text
          style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}
        >
          Password:
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
          }}
          onChangeText={setPasswordEntered}
        />
      </View>

      <Text
        style={{ color: "#818181", textDecorationLine: "underline" }}
        onPress={() => Linking.openURL("http://google.com")}
      >
        Forgot Password?
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ color: "#FFFFFF", fontWeight: "600" }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "#818181" }}>OR</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  userInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    padding: 10,
    margin: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00274C",
    padding: 10,
    borderRadius: 50,
    width: 150,
    margin: 10,
  },
  buttonContainer: {
    alignItems: "center",
    padding: 40,
  },
});
export default LoginPage;
