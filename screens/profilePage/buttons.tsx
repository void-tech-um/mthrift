import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

// use TouchableOpacity instead of Button
const Buttons = () => {
    return (
    <View>
        <Button
            title="Follow"
            onPress={() => Alert.alert('FOLLOW BUTTON NOT IMPLEMENTED')}
        />
        <Button
            title="Message"
            onPress={() => Alert.alert('MESSAGE BUTTON NOT IMPLEMENTED')}
        />
    </View>
    );
}
export default Buttons;

const styles = StyleSheet.create({
    button: {
        borderRadius: 40,
        backgroundColor: "#00274C"
    },
});