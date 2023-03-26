import * as React from "react";

import chair from "../assets/chair.png";
import hat from "../assets/hat.png";
import gradient from '../assets/gradient.jpeg';
import plus from '../assets/plus.png';

import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

const Selling = (props: any) => {
    return (
        <ImageBackground source={gradient} style={styles.container} >
            <Image source={plus} style={styles.itemPics} />
            <Image source={chair} style={styles.itemPics} />
            <Image source={hat} style={styles.itemPics} />
        
        </ImageBackground>

    );

    

};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
  
    itemPics: {
        width: 100,
        height: 100,
        color: "white",
        textAlign: "center",
        backgroundColor: "darkred",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 15,
    },
});

export default Selling;
