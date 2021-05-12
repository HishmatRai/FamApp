import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Notification = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });

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
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
            <View style={{ margin: 20 }}>
                <ScrollView>
                    {/* >>>>>>>>>>>>>> main <<<<<<<<<<<<<< */}
                    <View style={styles._main}>
                        <Text style={styles._Congratulations}>Congratulations!</Text>
                        <Text style={styles.match}>It's a match</Text>
                        <Image source={require('./../../assets/groupphoto.png')} style={styles._group_photo} />
                        <Text style={styles._conversation}>Start conversation now to each other!</Text>
                        <TouchableOpacity style={styles._send_message_button}
                            onPress={() => props.navigation.navigate("Message")}>
                            <Text style={styles._send_message_button_text}>Send Message</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._keep_looking_button}
                            onPress={() => props.navigation.navigate("FAVOURITE")}
                        >
                            <Text style={styles._send_message_button_text}>Keep Looking</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _main: {
        alignItems: "center",
        marginTop: 50
    },
    _Congratulations: {
        color: "#30439B",
        fontSize: 20,
        textAlign: "center"

    },
    match: {
        color: "#007719",
        fontSize: 35,
        textAlign: "center"
    },
    _group_photo: {
        width: 277,
        height: 252,
        marginTop: 30
    },
    _conversation: {
        color: "#004707",
        fontSize: 18,
        textAlign: "center"
    },
    _send_message_button: {
        backgroundColor: "#03F435",
        borderRadius: 20,
        marginTop: 20,
        alignItems: "center"


    },
    _send_message_button_text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 5,
        paddingBottom: 10
    },
    _keep_looking_button: {
        backgroundColor: "#03F435",
        borderRadius: 20,
        marginTop: 20,
        alignItems: "center"
    }

});

export default Notification;
