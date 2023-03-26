import * as React from "react";

import chair from "../assets/chair.png";
import hat from "../assets/hat.png";
import gradient from "../assets/gradient.jpeg";

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

const Wishlist = (props: any) => {
  return (
    <ImageBackground source={gradient} style={styles.container}>
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
    paddingLeft: 20,
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

export default Wishlist;
