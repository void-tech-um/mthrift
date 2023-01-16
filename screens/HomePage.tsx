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
} from "react-native";

// display the logo in top left corner with filter button right next to it with item card in the center
const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Filter</Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <ItemCard />
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 400,
    padding: 10,
    marginTop: 5,
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
    width: 400,
  },
});

export default HomePage;
