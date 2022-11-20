import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

interface SignUpProps {
  navigation: any;
}

const SignUp = ({ navigation }: SignUpProps) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log({ email, username, password, confirmPassword });
  };
  return (
    <View>
      <Text>Sign up here!</Text>
      <Text>Enter Username</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Text>Enter Email</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Text>Enter Password</Text>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
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
export default SignUp;
