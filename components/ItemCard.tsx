import * as React from "react";
import chatIcon from '../assets/chatIcon.png';
import likeIcon from '../assets/likeIcon.png';
import dislikeIcon from '../assets/dislikeIcon.png';
import image from '../assets/modelShirt.jpg';

import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

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
        marginLeft: 0
      }}>

        <Text style={styles.name}>{"Michigan Jersey"}</Text>
        
        
        <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
      
      }}>
 
     <Text style={styles.size}>{"Size: YL"}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{"$30"}</Text>
      </View>

</View>
      
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={ likeIcon } style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={ chatIcon } style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={ dislikeIcon } style={styles.icon} />
        </TouchableOpacity>
      </View> 
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#00274C",
    width: "100%",
    height: 600,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  name: {
    fontSize: 25,
    color: "white",
    fontWeight: 'bold',
  },
  size: {
    fontSize: 20,
    color: "white",
    marginRight: 20,
    fontWeight: 'bold',
  },
  priceContainer: {
    backgroundColor: "#C6E7F8",
    borderRadius: 10,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: "black",
    fontWeight: 'bold',
    
    padding: 5
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 55,
    height: 250,
    borderRadius: 100,
    marginTop: 340,
    marginLeft: 40,
  },
  button: {
    display: 'flex',
    alignItems: "center",
    
    padding: 10,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    display: 'flex',
  },
});

export default ItemCard;
