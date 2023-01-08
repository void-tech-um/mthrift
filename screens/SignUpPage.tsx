import React, { useState } from "react";
import logo from '../assets/MTHRIFT.png'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
  Alert,
} from "react-native";
import { useAuth } from "../App";
import { useUserContext } from "../App";
interface SignUpProps {
  navigation: any;
}

interface UserInfo {
  email: string;
  username: string;
  fullName: string;
  password: string;
  phoneNumber: string;
}

const SignUpPage = ({ navigation }: SignUpProps) => {
  const {info, setInfo} = useUserContext();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    username: "",
    fullName: "",
    password: "",
    phoneNumber: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = useAuth();

  const handleSignUp = () => {
    if (userInfo.password !== confirmPassword){
      Alert.alert("Passwords do not match");
      return;
    };
    setInfo(userInfo);
    auth.signUp(userInfo);
    // Added this line to bring user to login page if their password is ok
    navigation.navigate("Login")
  };

  return (
    <View style={styles.container}>

      // Need a back to login page arrow

      // Logo Image
      <Image source={logo} style={{ width: 10, height: 10 }} />

      // Page Title and greeting 
      <Text
          style={{ color: "#00274C", fontWeight: "bold", writingDirection: "rtl" }}
        >
          Create Account
      </Text>

      <Text
          style={{ color: "#00274C", fontWeight: "regular", writingDirection: "rtl" }}
        >
          Welcome to MThrift! 
      </Text>

      // Form Entry Places
      <View style={styles.userInputContainer}>
        <Text
          style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}
        >
          First Name:
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
          }}
          // onChangeText={setUsernameEntered}
        />
      </View>

      <View style={styles.userInputContainer}>
        <Text
          style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}
        >
          Last Name: 
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
          }}
          // onChangeText={setUsernameEntered}
        />
      </View>

      <View style={styles.userInputContainer}>
        <Text
          style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}
        >
          Phone: 
        </Text>
        <TextInput
          style={{
            placeholder: "XXX-XXX-XXXX", 
            height: 40,
            width: 200,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
          }}
          // onChangeText={setUsernameEntered}
        />
      </View>

      <View style={styles.userInputContainer}>
        <Text
          style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}
        >
          Email: 
        </Text>
        <TextInput
          style={{
            placeholder:"uniqname@umich.edu", 
            height: 40,
            width: 200,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
          }}
          // onChangeText={setUsernameEntered}
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
          // onChangeText={setUsernameEntered}
        />
      </View>

      <View style={styles.userInputContainer}>
        <Text
          style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}
        >
          Confirmed Password: 
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
          }}
          value={confirmPassword}
          //  onChangeText={setConfirmPassword}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp} 
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>
            Create Account
          </Text>
        </TouchableOpacity>

        

      </View>
    
    </View>

    /*
    // Old Stuff 
    <View>
      <Text>Sign up here!</Text>
      <Text>Enter Full Name</Text>
      <TextInput
        placeholder="Fullname"
        value={userInfo.fullName}
        onChangeText={(val) =>
          setUserInfo((prev) => {

            return { ...prev, fullName: val };
          })
        }
      />
      <Text>Enter Username</Text>
      <TextInput
        placeholder="Username"
        value={userInfo.username}
        onChangeText={(val) =>
          setUserInfo((prev) => {
            return { ...prev, username: val };
          })
        }
      />
      <Text>Enter Email</Text>
      <TextInput
        placeholder="Email"
        value={userInfo.email}
        onChangeText={(val) =>
          setUserInfo((prev) => {
            return { ...prev, email: val };
          })
        }
      />
      <Text>Enter Password</Text>
      <TextInput
        placeholder="Password"
        value={userInfo.password}
        onChangeText={(val) =>
          setUserInfo((prev) => {
            return { ...prev, password: val };
          })
        }
      />
      <Text>Enter Phone Number</Text>
      <TextInput
        placeholder="Phone Number"
        value={userInfo.phoneNumber}
        onChangeText={(val) =>
          setUserInfo((prev) => {
            return { ...prev, phoneNumber: val };
          })
        }
      />

      <Text>Confirm Password</Text>
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Already have an account?</Text>
      </TouchableOpacity>
    </View>
    */ 
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

export default SignUpPage;
