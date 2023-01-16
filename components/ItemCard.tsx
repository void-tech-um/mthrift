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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.likeButton}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dislikeButton}>
          <Text style={styles.buttonText}>Dislike</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Name: </Text>
      <Text style={styles.info}>{itemInfo.name}</Text>
      <Text style={styles.header}>Price: </Text>
      <Text style={styles.info}>{itemInfo.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00274C",
    width: 400,
    height: 550,
    borderRadius: 20,
    marginTop: 20,
  },
  header: {
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginRight: 300,
  },
  info: {
    fontSize: 16,
    color: "white",
    marginRight: 300,
    marginBottom: 20,
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
