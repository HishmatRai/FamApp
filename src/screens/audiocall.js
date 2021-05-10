import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const AudioCall = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [soundMode, setSoundMode] = useState(true);
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={true} />

            <ImageBackground source={require('./../../assets/favourite1.png')} style={styles._image}>
                <View style={styles._top_main}>

                    <Text style={styles._user_name}>Johan Smith</Text>

                </View>

                <View style={styles._bottom_main}>
                    <View style={styles._bottom_icons_main}>
                        <TouchableOpacity style={styles._bottom_button}
                            onPress={() => props.navigation.navigate("Message")} >
                            <Ionicons name="ios-chatbubbles" size={24} color="white" />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles._bottom_button}>
                            <MaterialIcons name="keyboard-voice" size={24} color="white" />
                        </TouchableOpacity> */}
                        <TouchableOpacity style={styles._call_end_button}
                            onPress={() => props.navigation.goBack()}>
                            <MaterialIcons name="call-end" size={34} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._bottom_button}
                            onPress={() => props.navigation.navigate("Vodeocall")}>
                            <Ionicons name="ios-videocam" size={24} color="white" />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles._bottom_button}>

                            {soundMode
                                ? <Feather name="volume-2" size={24} color="white" />
                                : <Feather name="volume-x" size={24} color="white" />
                            }
                        </TouchableOpacity> */}
                    </View>


                </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    _image: {
        flex: 1,
        resizeMode: 'cover',
        height: "100%"
    },
    _top_main: {
        position: "absolute",
        width: "100%",
        backgroundColor: 'rgba(0,0,3,0.3)',
        top: 30
    },
    _bottom_main: {
        position: 'absolute',
        bottom: 0,
        width: "100%",


    },
    _user_name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        paddingBottom: 30,
        paddingTop: 30
    },
    _bottom_icons_main: {
        paddingBottom: 30,
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"

    },
    _bottom_button: {
        backgroundColor: 'rgba(0,0,3,0.3)',
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    _call_end_button: {
        backgroundColor: "red",
        width: 60,
        height: 60,
        borderRadius: 100,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
});

export default AudioCall;
