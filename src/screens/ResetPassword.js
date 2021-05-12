import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ResetPassword = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');

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
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor="white" translucent={true} />
            <View style={{ margin: 20 }}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Text style={styles._heading}>Reset Password</Text>
                    <View style={styles.input_main}>
                        <Text style={styles._input_heading}>New Password</Text>
                        <TextInput
                            placeholder="*****"
                            style={styles._input}
                            underlineColor="#282F39"
                            placeholderTextColor="#282F39"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.input_main}>
                        <Text style={styles._input_heading}>Confirm Password</Text>
                        <TextInput
                            placeholder="*****"
                            style={styles._input}
                            underlineColor="#282F39"
                            placeholderTextColor="#282F39"
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.input_main}>
                        <Text style={styles._input_heading}>Number</Text>
                        <TextInput
                            placeholder="ACNO123456789"
                            style={styles._input}
                            underlineColor="#282F39"
                            placeholderTextColor="#282F39"
                        />
                    </View>

                    {/* <<<<<<<< Login Button >>>>>>>>> */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => props.navigation.navigate("Login")}
                    >

                        <LinearGradient
                            // Button Linear Gradient
                            end={[1.0, 0.5]}
                            start={[0.0, 0.5]}
                            locations={[0.0, 1.0]}
                            colors={['#006F01', '#00F710']}
                            style={{ alignItems: 'center', borderRadius: 5, borderRadius: 50 }}>

                            <Text style={styles._button_txt}>Reset</Text>
                        </LinearGradient>
                    </TouchableOpacity>



                </ScrollView>
            </View>
            {/* <<<<<<<< Line >>>>>>>>> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },

    _heading: {
        color: "#282F39",
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "MontserratExtraLight",
        marginTop: 30,
        width: "90%",
        alignSelf: "center",
        marginBottom: 20,
        textAlign: "center"

    },
    input_main: {
        borderBottomWidth: 2,
        borderBottomColor: "#03F435",
        paddingBottom:10,
        marginTop:20
    },
    _input_heading: {
        fontSize: 13,
        color: "#BBBBBB"
    },
    _input: {
        color: "#282F39",
        fontSize: 16,
    },
    button: {
        // backgroundColor: "green",
        borderRadius: 50,
        width: "90%",
        alignSelf: "center",
        marginTop: 50
    },
    _button_txt: {
        fontWeight: "bold",
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontFamily: "MontserratSemiBold"
    },

});

export default ResetPassword;
