import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from "react-native";
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
  const { info, setInfo } = useUserContext();
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
    if (userInfo.password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    setInfo(userInfo);
    auth.signUp(userInfo);
  };

  return (
    <View style={styles.container}>
      <Text>Sign up here!</Text>
        
      <View style={styles.userInputContainer}>
        <Text style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}>Full Name</Text>
        <TextInput
          style={styles.inputTextBox}
          placeholder="Fullname"
          value={userInfo.fullName}
          onChangeText={(val) =>
            setUserInfo((prev) => {
              return { ...prev, fullName: val };
            })
          }
        />
      </View> 

      <View style={styles.userInputContainer}>
          <Text style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}>Username</Text>
          <TextInput
            style={styles.inputTextBox}
            placeholder="Username"
            value={userInfo.username}
            onChangeText={(val) =>
              setUserInfo((prev) => {
                return { ...prev, username: val };
              })
            }
          />
      </View>
      
    
      <View style={styles.userInputContainer}>
        <Text style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}>Email</Text>
        <TextInput
        style={styles.inputTextBox}
          placeholder="Email"
          value={userInfo.email}
          onChangeText={(val) =>
            setUserInfo((prev) => {
              return { ...prev, email: val };
            })
          }
        />
      </View>       
      
      <View style={styles.userInputContainer}>
        <Text style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}>Phone </Text>
        <TextInput
          style={styles.inputTextBox}
          placeholder="Phone Number"
          value={userInfo.phoneNumber}
          onChangeText={(val) =>
            setUserInfo((prev) => {
              return { ...prev, phoneNumber: val };
            })
          }
        />
      </View>

      <View style={styles.userInputContainer}>
        <Text style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}>Password</Text>
        <TextInput
          style={styles.inputTextBox}
          placeholder="Password"
          value={userInfo.password}
          onChangeText={(val) =>
            setUserInfo((prev) => {
              return { ...prev, password: val };
            })
        }
        />
      </View>

      <View style={styles.userInputContainer}>
        <Text style={{ color: "black", fontWeight: "600", writingDirection: "rtl" }}>Confirm Password</Text>
        <TextInput
          style={styles.inputTextBox}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View> 

      <View style={styles.button}>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>    
  );
};

const styles = StyleSheet.create({
  inputTextBox: {
    height: 40,
    width: 200,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
  },
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
  button2: {
    alignItems: "center",
    backgroundColor: "#00274C",
    padding: 10,
    borderRadius: 50,
    width: 200,
    margin: 10,
  },

  buttonContainer: {
    alignItems: "center",
    padding: 40,
  },
});

export default SignUpPage;
