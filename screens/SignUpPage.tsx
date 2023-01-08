import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
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
  );
};
export default SignUpPage;
