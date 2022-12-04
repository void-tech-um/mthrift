import React, { useState } from "react";
import LoginError from "../components/LoginError";
import MTHRIFT_Logo from "../images/MTHRIFT_Logo.png";
import "../images"; 
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from "react-native";

interface LoginPageProps {
  navigation: any;
}

const LoginPage = ({ navigation }: LoginPageProps) => {
  const [usernameEntered, setUsernameEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");
  const [errorCheck, setErrorCheck] = useState(false);

  //button to eventually do validation check with database, to see if user exists (validate with emails
  //and passwords
  const onPress = () => {
    if (usernameEntered === "" || passwordEntered === "") {
      console.log("Username or password is empty");
      setErrorCheck(true);
      setTimeout(() => {
        setErrorCheck(false);
      }, 2500);
    } else {
      // we have username and password, login
      console.log("Username: " + usernameEntered);
      console.log("Password: " + passwordEntered);
    }
  };
  return (
    <View style={styles.container}>
      <LoginError errorCheck={errorCheck} />
      
      <Image source={require('./MTHRIFT_Logo.png')} />  

      <View>
          <Text style={{color: "black", fontFamily: "string", fontWeight: "normal", writingDirection: "rtl"}}>Email:</Text>
          <TextInput
            style={{ height: 40, backgroundColor: "D9D9D9", borderRadius: 20}} 
            /* placeholder="Username or Email" */
            onChangeText={setUsernameEntered}
          />
          
          <Text style={{color: "black", fontFamily: "string", fontWeight: "normal", writingDirection: "rtl"}}>Email:</Text>
          <TextInput
            style={{ height: 40, backgroundColor: "D9D9D9", borderRadius: 20}} 
            /* placeholder="Username or Email" */
            onChangeText={setPasswordEntered} 
          />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text>Or</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUp")}>
          <Text>Create Account</Text>
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
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00274C",
    padding: 10,
    borderRadius: 50,  
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  loginHeader: {
    fontSize: 20,
    paddingBottom: 24,
  },
  textEnter : {
    display: "flex", 
    flexDirection: "row",
    alignItems: "center", 
    justifycontent:"start",
    /*TODO: Might have to change below to be a responsive measurement type.*/
    borderRadius: 50, 
  }
  
});
export default LoginPage;
