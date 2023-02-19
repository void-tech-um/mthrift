import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import modelShirt from '../assets/modelShirt.jpg';

interface ChatInfo {
  sender: string;
  recipient: string;
  createdAt: Date;
  updatedAt: Date; 
}

// Chat card component that displays the chat info
const ChatCard = (props: any) => {
  const [itemInfo, setItemInfo] = React.useState<ChatInfo>({
    sender: "",
    recipient: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return (
    <View style={styles.container}>
        <View> 
          <Image source={modelShirt} style={styles.profileIcon}></Image> 
        </View>
        <Text style={styles.name}>{"Casey Clam"}</Text>
        <Text style={styles.details}>{"Ok sounds like a deal!"}</Text>
        <Text style={styles.details}>{"1:36 PM "}</Text>

    </View>

      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CDE1FF",
    width: "100%", 
  },
  profileIcon: {
    borderRadius: 500,
    width: 100, 
    height: 100,

  },
  name:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#00274c",
  },
  details:{
    fontSize: 15,
    fontWeight: "normal",
    color: "#818181",
  },
});

export default ChatCard;
