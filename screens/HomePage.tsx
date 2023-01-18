import * as React from "react";
import logo from "../assets/MTHRIFT.png";
import ItemCard from "../components/ItemCard";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

type Props = {
  navigation: any;
}

// display the logo in top left corner with filter button right next to it with item card in the center
const HomePage = ({ navigation }: Props) =>{
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Filter</Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate("Item")}>
          <ItemCard style={styles.cardStyle} />
        </TouchableOpacity>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    disaplay: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "3%",
    paddingRight: "3%",
    height: Dimensions.get("window").height,
    // width: Dimensions.get("window").width,
    width: "100%",
  },
  cardStyle: {
    width: "100%",
    height: 200,
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
  // styling for the filter button in top right corner
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  // styling for the scroll view
  scrollView: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: "100%",
  },
});

export default HomePage;
