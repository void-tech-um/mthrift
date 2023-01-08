import * as React from "react";
import { useState } from "react";
//import the context
import { useUserContext } from "../App";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

const ProfilePage = () => {
  //extract user info from userContext (aka the user information)
  const { info } = useUserContext();
  const onSelling = () => {
    Alert.alert("Switch to selling");
    setShowingSelling(true);
  };
  const onWishlist = () => {
    Alert.alert("Switch to wishlist");
    setShowingSelling(false);
  };
  const [showingSelling, setShowingSelling] = useState(true);

  return (
    <View style={styles.page}>
      <View style={styles.profileInfo}>
        <Text style={styles.fullName}>{info.fullName}</Text>
        <Text style={styles.username}>@{info.username}</Text>
        <Text style={styles.phoneNumber}>&#128222;{info.phoneNumber}</Text>
        <View style={styles.fixToText}>
          <Pressable style={styles.sellingButton} onPress={onSelling}>
            <Text style={styles.text}>Selling</Text>
          </Pressable>
          <Pressable style={styles.wishlistButton} onPress={onWishlist}>
            <Text style={styles.text}>Wishlist</Text>
          </Pressable>
        </View>
        {showingSelling ? (
          <Text>RenderSellingComponent</Text>
        ) : (
          <Text>RenderWishlistComponent</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  profileInfo: {
    margin: "5%",
    height: "90%",
  },
  fullName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#001c9b",
  },
  username: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#616161",
  },
  phoneNumber: {
    fontSize: 20,
  },
  fixToText: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sellingButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 3,
    backgroundColor: "black",
    borderColor: "#fd0000",
    width: "50%",
  },
  wishlistButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 3,
    backgroundColor: "grey",
    width: "50%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default ProfilePage;
