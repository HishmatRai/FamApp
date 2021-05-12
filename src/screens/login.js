import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput } from "react-native";
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
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <Image source={require('./../../assets/logo.png')} style={styles._logo} />
                        <Text style={styles._heading}>Login</Text>

                        <TextInput
                            placeholder="Phone number"
                            style={styles._input}
                            underlineColor="#3CCF5B"
                            placeholderTextColor="#3CCF5B"
                            keyboardType={"numeric"}
                        />
                        
                        <TextInput
                            placeholder="Password"
                            style={styles._input}
                            underlineColor="#3CCF5B"
                            placeholderTextColor="#3CCF5B"
                           secureTextEntry={true}
                        />
                        {/* <<<<<<<< Forgot Password >>>>>>>>> */}
                        <TouchableOpacity style={styles._forgot_password_button} onPress={() => props.navigation.navigate("ResetPassword")}>
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
                                colors={['#006F01', '#00F710']}
                                style={{ alignItems: 'center', borderRadius: 5, borderRadius: 50 }}>

                                <Text style={styles._button_txt}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>


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
        width: 100,
        height: 135,
        alignSelf: "center",
        marginTop: 50
    },
    _heading: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 28,
        fontFamily: "MontserratExtraLight",
        marginTop: 30,
        width: "90%",
        alignSelf: "center",
        marginBottom:20

    },
    _input: {
        width: "90%",
        alignSelf: "center",
        color:"#03F435",
        borderBottomWidth:3,
        borderBottomColor:"#03F435",
       paddingBottom:10,
       fontSize:15,
       marginTop:10,
       marginBottom:10
    },
    _forgot_password_button: {
        alignSelf: "flex-end",
        marginTop: 10
    },
    _forgot_password_button_text: {
        color: "#00A723",
        fontSize: 15,
        fontFamily: "MontserratExtraLight",
        fontWeight: "bold",
        borderBottomColor: "#00A723",
        borderBottomWidth: 3
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
    _term_services: {
        color: "#000000",
        borderBottomWidth: 2,
        borderBottomColor: "#000000",
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
        color: "#00A723",
        fontWeight: "bold",
        fontFamily: "MontserratSemiBold",
        fontSize: 16
    },
    _register: {
        fontFamily: "MontserratSemiBold",
        fontSize: 16,
        color: "#DD4B39"

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
