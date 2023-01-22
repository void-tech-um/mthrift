import modelShirt from '../assets/modelShirt.jpg';
import chatIcon from '../assets/chatIcon.png';
import likeIcon from '../assets/likeIcon.png';
import dislikeIcon from '../assets/dislikeIcon.png';
import gradient from '../assets/gradient.jpeg';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
    ImageBackground
  } from "react-native";

  interface ItemPageProps {
    navigation: any;
  }

const ItemPage = ({navigation}: ItemPageProps) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={gradient} style={styles.container}>
                <View style={styles.firstRow}>    
                <TouchableOpacity onPress={() => navigation.navigate("Tabs")} style={styles.xIcon}>
                    <Image source={ dislikeIcon } />
                </TouchableOpacity>            
                    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{display: 'flex'}}>
                        <Image source={modelShirt} style={styles.scrollImg}></Image>
                        <Image source={modelShirt} style={styles.scrollImg}></Image>
                    </ScrollView>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={{display: 'flex'}} ><Image source={ dislikeIcon } style={styles.icon} /></TouchableOpacity>
                    <TouchableOpacity style={{display: 'flex'}} ><Image source={ chatIcon } style={styles.icon} /></TouchableOpacity>
                    <TouchableOpacity style={{display: 'flex'}} ><Image source={ likeIcon } style={styles.icon} /></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    icon: {
        width: 70,
        height: 70,
        display: 'flex',
    },
    xIcon: {
        position: 'absolute',
        paddingTop: 20,
        marginLeft: 20,
        zIndex: 1,

    },
    firstRow: {
        width: '100%',
        height: '70%',
        zIndex: 0,
    },
    scrollImg: {
        padding: '7%',
        margin: 0,
        width: Dimensions.get('window').width,
    },
    row: {
        width: '70%',
        height: 70,
        flexDirection:"row", 
        justifyContent: 'space-between',
    },
    bullets: {
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 5,
      },
});

export default ItemPage;