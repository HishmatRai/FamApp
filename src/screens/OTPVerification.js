import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, StatusBar, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Otp from './../component/Otp'
import { LinearGradient } from 'expo-linear-gradient';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const OTPVerification = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [mobileNum, setMobileNum] = React.useState("");
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
            <StatusBar translucent hidden={true} />
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <Text style={styles._heading}>OTP  Verification</Text>
                    <Text style={styles._sub_heading}>Enter the 4-digit code sent to you at</Text>
                    <View style={styles._number_main}>
                        <Text style={styles._number}>+92 34608 57289</Text>
                        <TouchableOpacity>
                            <Text style={styles._edit_btn_txt}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles._enter_otp}>Enter OTP</Text>
                    <View style={styles._country_picker_main}>
                        <Otp />
                    </View>
           <Text style={{fontSize:20,textAlign:'center',color:"#313450"}}>Did not receive the code?</Text>
           <View style={styles._resend_btn_main}>
               <TouchableOpacity>
                   <Text style={styles._Resend_btn_txt}>Re-send</Text>
               </TouchableOpacity>
               <TouchableOpacity>
               <Text style={styles._Resend_btn_txt}>Get a call now</Text>
               </TouchableOpacity>
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

                            <Text style={styles._button_txt}>Done</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _country_picker_main: {
width:"80%",
alignSelf:"center",
marginBottom: 30
    },
    _enter_otp: {
        fontSize: 20,
        color: "#0BC400",
        textAlign: "center",
        marginTop: 80,
        marginBottom: 20
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
    _heading: {
        fontSize: 25,
        color: "#282F39",
        fontWeight: "bold",
        marginTop: 30
    },
    _sub_heading: {
        fontSize: 16,
        color: "#7F7F7F"
    },
    _number_main: {
        flexDirection: "row",
        alignItems: "center"
    },
    _number: {
        fontSize: 16,
        color: "#282F39",
        marginRight: 10
    },
    _edit_btn_txt: {
        fontSize: 16,
        color: "#3369FF",

    },
    _resend_btn_main:{
        flexDirection:"row",
        width:"80%",
        alignSelf:"center",
        marginTop:40,
        justifyContent:"space-between"
    },
    _Resend_btn_txt:{
        fontSize:20,
        color:"#444444"
    }
});

export default OTPVerification;
