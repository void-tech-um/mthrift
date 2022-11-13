import React, { } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const LoginError = (props) => {
    if(props.errorCheck === true){
        return (
            <View>
                <Text
                    style={styles.error}
                >
                    ERROR: Username or password is incorrect!
                </Text>
            </View>
        );
    } else {
        return(<View></View>)
    } 
}
const styles = StyleSheet.create({
    error: {
      color: 'red',
    },
  });
export default LoginError;