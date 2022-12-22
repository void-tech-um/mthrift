import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

interface UserInfo {
  email: string;
  username: string;
  fullName: string;
  phone: string;
}

const ProfilePage = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    email: "",
    username: "",
    fullName: "",
    phone: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Name: </Text>
      <Text style={styles.info}>{userInfo.fullName}</Text>
      <Text style={styles.header}>Username: </Text>
      <Text style={styles.info}>{userInfo.username}</Text>
      <Text style={styles.header}>Email: </Text>
      <Text style={styles.info}>{userInfo.email}</Text>
      <Text style={styles.header}>Phone: </Text>
      <Text style={styles.info}>{userInfo.phone}</Text>
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
