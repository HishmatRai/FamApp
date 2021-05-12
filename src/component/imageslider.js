/*This is an example of React Native App Intro Slider */
import React from "react";
//import react in project

import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
//import all the required component

import AppIntroSlider from "react-native-app-intro-slider";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
//import AppIntroSlider to use it
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default class Imageslider extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showRealApp: false,
            isNavigation: false,
        };
    }
    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image
                    source={item.image}
                    style={{
                        width: 299,
                        height: 361,
                        borderRadius: 15,
                        alignSelf: "center",
                        marginTop: 30,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "#ADF9B2",
                        marginHorizontal: 10,
                        marginVertical: 40,
                        paddingBottom: 30,
                        paddingTop: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        marginTop: -100
                    }}
                >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                    {/* iocns */}
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._small_button}>
                            <MaterialCommunityIcons name="reload" size={24} color="#F03030" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._large_button}>
                            <Entypo name="cross" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._large_button}>
                            <Ionicons name="md-heart" size={24} color="#FF538C" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._small_button}>
                            <Fontisto name="flash" size={24} color="#FCC24C" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._large_button}>
                            <Entypo name="star" size={34} color="#FCC24C" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._large_button}
                            onPress={() => this.props.path.navigation.navigate("Message")}>
                            <Ionicons name="ios-chatbubbles" size={34} color="#CA2C30" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };



    _onDone = () => {
        this.setState({ isNavigation: true });
    };
    onslideCahnge = (index, lastIndex) => {
        console.log(index, lastIndex);
    };
    render() {
        if (this.state.showRealApp) {
            return <App />;
        } else {
            return this.state.isNavigation === true ? (
                <Navigator />
            ) : (
                    <AppIntroSlider
                        renderItem={this._renderItem}
                        data={slides}
                        onDone={this._onDone}
                        renderDoneButton={this._renderDoneButton}
                        renderNextButton={this._renderNextButton}
                        dotStyle={{ backgroundColor: "gray", marginTop: -600 }}
                        activeDotStyle={{ backgroundColor: "#CA2C30", marginTop: -600 }}
                        onSlideChange={(index, lastIndex) =>
                            this.onslideCahnge(index, lastIndex)
                        }
                        backgroundColor="white"
                    />
                );
        }
    }
}
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    text: {
        color: "grey",
        fontSize: 14,
        textAlign: "center",
        width: "90%",
        alignSelf: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "black",
        backgroundColor: "transparent",
        textAlign: "center",
        marginTop: 16,
        width: "80%",
        alignSelf: "center",
    },
    slide: {
        flex: 1,
        backgroundColor: "white",
        marginBottom: 50
    },
    buttonCircle: {
        borderColor: "#347AF0",
        borderWidth: 1,
        padding: "5%",
        borderRadius: 50,
        width: "78%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#347AF0",
        marginRight: "40%",
        // marginTop:-50
    },
    textDone: {
        color: "white",
    },
    _icons_main: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20
    },
    _small_button: {
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    _large_button: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    }

});

const slides = [
    {
        key: "s1",
        text: "Perusing ABA. Love is life and We live only once. So live your life",
        title: "Jenifer Jane",
        titleStyle: styles.title,
        textStyle: styles.text,
        image: require("./../../assets/largeimage.png"),
    },
    {
        key: "s2",
        title: "Jenifer Jane",
        titleStyle: styles.title,
        text: "Perusing ABA. Love is life and We live only once. So live your life.",
        image: require("./../../assets/largeimage.png"),
    },
    {
        key: "s3",
        title: "Jenifer Jane",
        titleStyle: styles.title,
        text: "Perusing ABA. Love is life and We live only once. So live your life",
        image: require("./../../assets/largeimage.png"),
        backgroundColor: "#22bcb5",
    },

];