import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image ,StatusBar} from "react-native";
import { TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Login = (props) => {
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
            <ImageBackground source={require('./../../assets/login_background.png')} style={styles._image}>
                <View style={{ margin: 20 }}>
                    <ScrollView style={styles.scrollView}>
                        <Image source={require('./../../assets/updated_logo.png')} style={styles._logo} />

                        <Text style={styles._heading}>Login</Text>
                        {/* <<<<<<<< Email >>>>>>>>> */}
                        <TextInput
                            label="Email Address / Phone number"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={styles._input}
                            underlineColor="#545151"
                            placeholderTextColor="red"
                        />

                        {/* <<<<<<<< Password >>>>>>>>> */}
                        <TextInput
                            label="Password"
                            value={text2}
                            onChangeText={text2 => setText2(text2)}
                            style={styles._input}
                            underlineColor="#545151"
                            secureTextEntry={true}
                            color="green"

                        />

                        {/* <<<<<<<< Forgot Password >>>>>>>>> */}
                        <TouchableOpacity style={styles._forgot_password_button}>
                            <Text style={styles._forgot_password_button_text}>Forgot Password?</Text>
                        </TouchableOpacity>

                        {/* <<<<<<<< Login Button >>>>>>>>> */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => props.navigation.navigate("Home")}
                        >

                            <LinearGradient
                                // Button Linear Gradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#BD2B31', '#2B439E']}
                                style={{ alignItems: 'center', borderRadius: 5, borderRadius: 50 }}>

                                <Text style={styles._button_txt}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        {/* <<<<<<<< Social Button >>>>>>>>> */}
                        <View style={styles._socail_login_main}>
                            <TouchableOpacity style={styles._facebook_icon}>
                                <Fontisto name="facebook" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._google_icon}>
                                <AntDesign name="google" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._twitter_icon}>
                                <AntDesign name="twitter" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._linkiden_icon}>
                                <Entypo name="linkedin" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* <<<<<<<< Term of services >>>>>>>>> */}
                        <Text style={styles._term_services}>By using this app you agree with the terms of services</Text>

                        {/* <<<<<<<< Register >>>>>>>>> */}
                        <View style={styles._register_main}>
                            <Text style={styles._new_user}>New user? </Text>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("Moreinterest")}
                            >
                                <Text style={styles._register}>Register</Text>
                            </TouchableOpacity>
                        </View>


                        <Text style={styles._line}></Text>

                    </ScrollView>
                </View>
                {/* <<<<<<<< Line >>>>>>>>> */}
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
    _logo: {
        width: 269,
        height: 56,
        alignSelf: "center",
        marginTop: 50
    },
    _heading: {
        color: "#2545A3",
        fontWeight: "bold",
        fontSize: 28,
        fontFamily: "MontserratExtraLight",
        marginTop: 30

    },
    _input: {
        backgroundColor: "transparent",
    },
    _forgot_password_button: {
        alignSelf: "flex-end",
        marginTop: 10
    },
    _forgot_password_button_text: {
        color: "white",
        fontSize: 15,
        fontFamily: "MontserratExtraLight",
        fontWeight: "bold",
        borderBottomColor: "white",
        borderBottomWidth: 1
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
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontFamily: "MontserratSemiBold"
    },
    _socail_login_main: {
        flexDirection: "row",
        width: "70%",
        alignSelf: "center",
        justifyContent: "space-between",
        marginTop: 30
    },
    _facebook_icon: {
        borderRadius: 100,
        height: 50,
        width: 50,
        backgroundColor: "#3B5998",
        alignItems: "center",
        justifyContent: "center"
    },
    _google_icon: {
        borderRadius: 100,
        height: 50,
        width: 50,
        backgroundColor: "#DD4B39",
        alignItems: "center",
        justifyContent: "center",

    },
    _twitter_icon: {
        borderRadius: 100,
        height: 50,
        width: 50,
        backgroundColor: "#55ACEE",
        alignItems: "center",
        justifyContent: "center"
    },
    _linkiden_icon: {
        borderRadius: 100,
        height: 50,
        width: 50,
        backgroundColor: "#007AB9",
        alignItems: "center",
        justifyContent: "center"
    },
    _term_services: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        marginTop: 20,
        fontSize: 14,
        fontFamily: "MontserratSemiBold",
        textAlign: "center"
    },
    _register_main: {
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 30
    },
    _new_user: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "MontserratSemiBold",
        fontSize: 16
    },
    _register: {
        fontFamily: "MontserratSemiBold",
        fontSize: 16,
        color: "#DA2D30"

    },
    _line: {
        alignSelf: "center",
        width: "40%",
        backgroundColor: "#CCCCCC",
        height: 5,
        borderRadius: 50,
        marginTop: 10
    }
});

export default Login;
