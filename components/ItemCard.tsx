import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

interface ItemInfo {
  name: string;
  price: number;
  itemPhotos: string[];
}

// Item card component that displays the item's name, price, and photos
const ItemCard = (props: any) => {
  const [itemInfo, setItemInfo] = React.useState<ItemInfo>({
    name: "",
    price: 0,
    itemPhotos: [],
  });
  return (
    <View style={styles.container}>
      <View style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "auto",
        marginBottom: 20,
        marginLeft: 10
      }}>
        <Text style={styles.name}>{"Michigan Jersey"}</Text>
        {/* <Text style={styles.header}>Price: </Text> */}
        
        <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      
      }}>
 
        {/* <Text style={styles.header}>Price: </Text> */}
        <Text style={{
           fontSize: 25,
           color: "white",
           marginRight: 15
        }}>{"Size:YL"}</Text>
        <Text style={styles.price}>{"$30"}</Text>
      
      </View>
      
      </View>

      {<View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.likeButton}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dislikeButton}>
          <Text style={styles.buttonText}>Dislike</Text>
        </TouchableOpacity>
      </View> }
      {<Text style={styles.header}>Name: </Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#00274C",
    width: "100%",
    height: 550,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  name: {
    fontSize: 16,
    color: "white",
  },
  price: {
    fontSize: 30,
    color: "black",
    backgroundColor: "lightblue",
    
    padding: 5
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 65,
    height: 60,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 300,
  },
  likeButton: {
    alignItems: "center",
    backgroundColor: "#35C27E",
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
  },
  chatButton: {
    alignItems: "center",
    backgroundColor: "#FFCB05",
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
  },
  dislikeButton: {
    alignItems: "center",
    backgroundColor: "#FF9494",
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
});

export default ItemCard;
