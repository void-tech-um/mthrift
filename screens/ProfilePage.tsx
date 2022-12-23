import * as React from "react";
import { userContext } from "../App";
//import the context
import { useUserContext } from "../App";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ProfilePage = () => {
  //extract user info from userContext (aka the user information)
  const { info } = useUserContext();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Name: </Text>
      <Text style={styles.info}>{info.fullName}</Text>
      <Text style={styles.header}>Username: </Text>
      <Text style={styles.info}>{info.username}</Text>
      <Text style={styles.header}>Email: </Text>
      <Text style={styles.info}>{info.email}</Text>
      <Text style={styles.header}>Phone: </Text>
      <Text style={styles.info}>{info.phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",

    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
  },
});

export default ProfilePage;
