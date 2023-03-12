import * as React from "react";
import logo from "../assets/MTHRIFT.png";
import ChatCard from "../components/ChatCard";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

// display the logo in top left corner with filter button right next to it with item card in the center
const ChatPage = () =>{
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate("Chat" as never, {} as never)}>
          <ChatCard style={styles.cardStyle} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat" as never, {} as never)}>
          <ChatCard style={styles.cardStyle} />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingLeft: "3%",
    paddingRight: "3%",
    height: Dimensions.get("window").height,
    // width: Dimensions.get("window").width,
    width: "100%",
  },
  cardStyle: {
    width: "100%",
    height: "20%",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginTop: 5,
    marginRight: 80,
  },
  logo: {
    width: 75,
    height: 20,
    resizeMode: "contain",
    marginTop: 20,
    marginRight: 250,
  },
  // styling for the scroll view
  scrollView: {
    flex:1, 
    flexDirection: "column",
    width: "100%",
  },
});

export default ChatPage;