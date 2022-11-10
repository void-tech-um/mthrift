import React, { useState } from 'react';
import LoginError from './LoginError';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
const LoginPage = ({navigation}) => {
    const [usernameEntered, setUsernameEntered] = useState("");
    const [passwordEntered, setPasswordEntered] = useState("");
    const [errorCheck, setErrorCheck] = useState(false);
    

    //button to eventually do validation check with database, to see if user exists (validate with emails
    //and passwords
    const onPress = () => {
        if(usernameEntered === ""){
            console.log("Username is empty");
            setErrorCheck(true);
            setTimeout(() => {
                setErrorCheck(false);
            }, 2500);
        } else {
            console.log("Username: " + usernameEntered);
        }
        if(passwordEntered === ""){
            console.log("Password is empty");
            setErrorCheck(true);
            setTimeout(() => {
                setErrorCheck(false);
            }, 2500);
        } else {
            console.log("Password: " + passwordEntered);
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <LoginError errorCheck={errorCheck}/>
            <Text
                style={styles.loginHeader}
            >
            Enter your login info to sign in!
            </Text>
            <Text
                style={{fontWeight: 'bold'}}
            >
                Username:
            </Text>
            <TextInput
                style={{height: 40}}
                placeholder="Username or Email"
                onChangeText={setUsernameEntered}
            />
            <Text 
                style={{fontWeight: 'bold'}}
            >
            Password:
            </Text>
            <TextInput
                style={{height: 40}}
                placeholder="Password goes here!"
                onChangeText={setPasswordEntered}

            />
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                    >
                    <Text>Press Here</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text>Don't have an account?</Text>
                </TouchableOpacity>
        </View>
    );
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    loginHeader: {
        fontSize: 20,
        paddingBottom: 24,
    }
});
  export default LoginPage;