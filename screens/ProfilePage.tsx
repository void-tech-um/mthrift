import * as React from "react";
import { useState } from "react";
import { UserContext } from "../App";
import { useAuth } from "../App";
//import the context
import { useUserContext } from "../App";
import { StyleSheet, Text, View, Pressable, Alert, TouchableOpacity, Image } from "react-native";
import dislikeIcon from '../assets/dislikeIcon.png';


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
  const [loggedIn, setLoggedIn] = useState(true);

  const authLogOut = useAuth();
  const handleLogOut = () => {
    //Alert.alert("Are you sure you want to log out?");
    setLoggedIn(false);
    authLogOut.signOut();
  };

  return (
    <View style={styles.page}>
      <View style={styles.profileInfo}>
        <TouchableOpacity onPress={handleLogOut}>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.bioInfo}>
          <Text style={styles.fullName}>John Ram{info.fullName}</Text>
          <Text style={styles.username}> ✉️ jram@umich.edu{info.username}</Text>
          <Text style={styles.phoneNumber}>&#128222; (758)-607-5063{info.phoneNumber}</Text>
        </View>
        <Image source={ dislikeIcon } style={styles.profilePhoto} />
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
    color: "#003399",
    textAlign: "right", 
    marginRight: 20, 
  },
  username: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#616161",
    textAlign: "right", 
    marginRight: 20, 
    
  },
  phoneNumber: {
    fontSize: 15,
    textAlign: "right",
    marginRight: 20, 
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
    backgroundColor: "#003399",
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
    backgroundColor: "#e6e6e6",
    width: "50%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  logoutButton: {
    width: 120,
    color: "white",
    textAlign: "center",
    backgroundColor: "darkred",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
  },
  bioInfo: {
    textAlign: "right",  
  },
  profilePhoto : {
    textAlign: "right",  
    paddingBottom: 50,
    borderRadius: 20,
  },
  
});

export default ProfilePage;
