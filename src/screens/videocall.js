import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function VideoCall(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [soundMode, setSoundMode] = useState(true);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent hidden={true} />
            <Camera style={{ flex: 1 }} type={type}>

                {/* user name and profile image */}
                <View style={styles._user_name_profile_main}>
                    <View style={styles._user_profile_main}>
                        <Image source={require('./../../assets/profile.png')} style={styles._profile} />
                    </View>
                    <Text style={styles._user_name}>Johan Smith</Text>
                </View>
                {/* >>>>>>>>>>>>>>>> Call <<<<<<<<<<<<< */}
                <View style={styles._call_main}>
                    <TouchableOpacity style={styles._call_end_button}
                        onPress={() => props.navigation.goBack()}>
                        <MaterialIcons name="call-end" size={34} color="white" />
                    </TouchableOpacity>
                </View>
                {/* >>>>>>>>>>>>>>>> Tab <<<<<<<<<<<<< */}

                <View style={styles._bottom_tab}>
                    <TouchableOpacity style={styles._bottom_button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <EvilIcons name="camera" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._bottom_button} >
                        <FontAwesome name="volume-up" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._bottom_button}>
                        <MaterialIcons name="keyboard-voice" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({



    _bottom_tab: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
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
    _call_main: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        marginBottom: 100

    },
    _call_icon: {
        width: 64,
        height: 64,
        borderRadius: 100
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
    _user_name_profile_main: {
        marginTop: 100,
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"

    },
    _user_name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    },
    _user_profile_main: {
        width: 148,
        height: 148,
        borderRadius: 100
    },
    _profile: {
        width: 148,
        height: 148,
        borderRadius: 100
    }

})