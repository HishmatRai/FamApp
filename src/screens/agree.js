import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Agree = (props) => {
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
            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<   LOGO SECTION  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <ScrollView style={{ margin: 20 }}>
                <Image source={require('./../../assets/updated_logo.png')} style={styles._logo} />
                <Text style={styles._roles}>Please follow these house rules</Text>

                {/* <<<<<<<    01 >>>>>>>>>>> */}
                <View style={styles._main}>
                    <View style={styles._icon}>
                        <FontAwesome name="hand-o-right" size={30} color="#BD2A30" />
                    </View>
                    <View style={styles._heading_main}>
                        <Text style={styles._heading}>Be Yourself</Text>
                        <Text style={styles._dis}>Make sure your photos, age and bio are true to who you are.</Text>
                    </View>
                </View>

                {/* <<<<<<<    02 >>>>>>>>>>> */}
                <View style={styles._main}>
                    <View style={styles._icon}>
                        <FontAwesome name="hand-o-right" size={30} color="#BD2A30" />
                    </View>
                    <View style={styles._heading_main}>
                        <Text style={styles._heading}>Stay Safe</Text>
                        <Text style={styles._dis}>Don't be too quick to give out personal information.</Text>
                    </View>
                </View>

                {/* <<<<<<<    03 >>>>>>>>>>> */}
                <View style={styles._main}>
                    <View style={styles._icon}>
                        <FontAwesome name="hand-o-right" size={30} color="#BD2A30" />
                    </View>
                    <View style={styles._heading_main}>
                        <Text style={styles._heading}>Play it cool</Text>
                        <Text style={styles._dis}>Respect others and treat them as you would like to be treated.</Text>
                    </View>
                </View>

                {/* <<<<<<<    04 >>>>>>>>>>> */}
                <View style={styles._main}>
                    <View style={styles._icon}>
                        <FontAwesome name="hand-o-right" size={30} color="#BD2A30" />
                    </View>
                    <View style={styles._heading_main}>
                        <Text style={styles._heading}>Be proactive</Text>
                        <Text style={styles._dis}>Always report bad behaviour</Text>
                    </View>
                </View>

                {/* <<<<<<<< Button <<<<<<<< */}
                <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate("Home")}
                >
                    <LinearGradient
                        // Button Linear Gradient
                        end={[1.0, 0.5]}
                        start={[0.0, 0.5]}
                        locations={[0.0, 1.0]}
                        colors={['#BD2B31', '#2B439E']}
                        style={{ alignItems: 'center', borderRadius: 5, borderRadius: 50 }}>
                        <Text style={styles._button_txt}>I Agree</Text>
                    </LinearGradient>
                </TouchableOpacity>


            </ScrollView>
            {/* <<<<<<<< Line >>>>>>>>> */}
            <Text style={styles._line}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _logo: {
        width: 250,
        height: 52,
        alignSelf: "center",
        marginTop: 60
    },
    _roles: {
        color: "#DA2D30",
        textAlign: "center",
        fontSize: 18,
        marginTop: 20
    },
    _main: {
        marginTop: 20,
        flexDirection: "row"
    },
    _icon: {
        width: "15%"
    },
    _heading_main: {
        width: "85%"
    },
    _heading: {
        color: "#2545A3",
        fontWeight: "bold",
        fontSize: 20,

    },
    _dis: {
        fontSize: 16,
        color: "#000000",
        fontFamily: "MontserratExtraLight",
        paddingRight: 50,
        color: "gray",
        marginTop: 10
    },
    button: {
        // backgroundColor: "green",
        borderRadius: 50,
        width: "100%",
        alignSelf: "center",
        marginTop: 50
    },
    _button_txt: {
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontFamily: "MontserratSemiBold"
    },
    _line: {
        alignSelf: "center",
        width: "40%",
        backgroundColor: "#CCCCCC",
        height: 5,
        borderRadius: 50,
        position: "absolute",
        bottom: 10
    }


});

export default Agree;
