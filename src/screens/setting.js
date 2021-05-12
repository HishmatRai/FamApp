import React, { useState, useEffect } from "react";
import {
    View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView,
    TouchableOpacity, Modal, Alert
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import ToggleButton from './../component/togglebutton'
import { LinearGradient } from 'expo-linear-gradient';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Setting = (props) => {
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
                {/* <<<<<<<<<<<<<   Header >>>>>>>>>>>>> */}
                <View style={styles._header}>
                    <TouchableOpacity
                        style={{ paddingLeft: 5, paddingRight: 5 }}
                        onPress={() => props.navigation.goBack()}
                    >
                        <Ionicons name="ios-arrow-back" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={styles._header_text}>Settings</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <<<<<<<<<<<< Account Setting >>>>>>>>>>>> */}
                    <View style={{ marginTop: 50 }}>
                        <Text style={styles._heading}>Account Settings</Text>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Phone number</Text>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Text style={styles._mob_number}>123456789</Text>
                                <EvilIcons name="chevron-right" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Discovery Setting >>>>>>>>>>>> */}
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles._heading}>Discovery Settings</Text>
                        <View style={styles._mob_number_setting_main2}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles._mob_number_heading}>Location</Text>
                                <TouchableOpacity>
                                    <Text style={styles._current_location}>My Current Location</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <View style={styles._mob_number_setting_main_sett}>
                                    <View style={styles._text_area}>
                                        <Text style={styles._mob_number_heading}>Global</Text>
                                    </View>
                                    <View style={styles._button_area}>
                                        <ToggleButton />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Text style={styles._global_dis}>Global change will allow you to see people nearby and from around the world</Text>

                    {/* <<<<<<<<<<<< Date Right >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._mob_number_setting_main}>
                            <View style={styles._text_area}>
                                <Text style={styles._mob_number_heading}>Show me on Date Right</Text>

                            </View>
                            <View style={styles._button_area}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Share my feed >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._mob_number_setting_main}>
                            <View style={styles._text_area}>
                                <Text style={styles._mob_number_heading}>Share my feed</Text>
                            </View>
                            <View style={styles._button_area}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Recommended sort >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._mob_number_setting_main}>
                            <View style={styles._text_area}>
                                <Text style={styles._mob_number_heading}>Recommended sort</Text>
                            </View>
                            <View style={styles._button_area}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Web Profile Setting >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Web Profile</Text>
                        <View style={styles._mob_number_setting_main}>
                            <Text style={styles._mob_number_heading}>Username</Text>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={styles._username}>Claim yours</Text>
                                <EvilIcons name="chevron-right" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Top Picks >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Top Picks</Text>
                        <View style={styles._mob_number_setting_main}>
                            <View style={styles._text_area}>
                                <Text style={styles._mob_number_heading}>Manage Top Picks</Text>
                            </View>
                            <View style={styles._button_area}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<< Read Receipts >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Read Receipts</Text>
                        <View style={styles._mob_number_setting_main}>
                            <View style={styles._text_area}>
                                <Text style={styles._mob_number_heading}>Send Read Receipts</Text>
                            </View>
                            <View style={styles._button_area}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<< Swipe Surge >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Swipe Surge</Text>
                        <View style={styles._mob_number_setting_main}>
                            <View style={styles._text_area}>
                                <Text style={styles._mob_number_heading}>Show me in Swipe Surge</Text>
                            </View>
                            <View style={styles._button_area}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Activity Status >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Activity Status</Text>
                        <View style={styles._mob_number_setting_main}>
                            <View style={styles._text_area}>
                                <Text style={styles._mob_number_heading}>Show me Activity Status</Text>
                            </View>
                            <View style={styles._button_area}>
                                <ToggleButton />
                            </View>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Nitification >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Notification</Text>
                        <View style={styles._notification_main}>
                            <View style={styles._mob_number_setting_main3}>
                                <View style={styles._text_area}>
                                    <Text style={styles._mob_number_heading}>Email</Text>
                                </View>
                                <View style={styles._button_area}>
                                    <ToggleButton />
                                </View>
                            </View>
                            <View style={styles._mob_number_setting_main3}>
                                <View style={styles._text_area}>
                                    <Text style={styles._mob_number_heading}>Push Notification</Text>
                                </View>
                                <View style={styles._button_area}>
                                    <ToggleButton />
                                </View>
                            </View>

                            <View style={styles._mob_number_setting_main3}>
                                <View style={styles._text_area}>
                                    <Text style={styles._mob_number_heading}>Receive news letters</Text>
                                </View>
                                <View style={styles._button_area}>
                                    <ToggleButton />
                                </View>
                            </View>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<< Payment Account >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Payment Account</Text>
                        <View style={styles._notification_main}>
                            <TouchableOpacity style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Manage Payment Account</Text>
                                <EvilIcons name="chevron-right" size={24} color="gray" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Restore Purchase</Text>
                                <EvilIcons name="chevron-right" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Contact Us >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Contact Us</Text>
                        <TouchableOpacity style={styles._support}>
                            <Text style={styles._heading}>Help & Support</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <<<<<<<<<<<< Community >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Community</Text>
                        <View style={styles._notification_main}>
                            <TouchableOpacity style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Community Guidelines</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._mob_number_setting_main3}>
                                <Text style={styles._mob_number_heading}>Safety tips</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* <<<<<<<<<<<<  Share Date Right >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Share Date Right</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Legal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Licenses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles._heading}>Terms of Services</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <<<<<<<< Login Button >>>>>>>>> */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => props.navigation.navigate("Login")}>

                        <LinearGradient
                            // Button Linear Gradient
                            end={[1.0, 0.5]}
                            start={[0.0, 0.5]}
                            locations={[0.0, 1.0]}
                            colors={['#006F01', '#00F710']}
                            style={{ alignItems: 'center', borderRadius: 5, borderRadius: 50 }}>

                            <Text style={styles._button_txt}>Logout</Text>
                        </LinearGradient>

                    </TouchableOpacity>

                    {/* <<<<<<<< Delete Account Button >>>>>>>>> */}
                    <TouchableOpacity
                        style={styles._delete_account_button}>
                        <Text style={styles._delete_account_button_txt}>Delete Account</Text>
                    </TouchableOpacity>
                    <View style={{ marginBottom: 70 }}></View>
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
    _header: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        marginBottom: 10

    },
    _header_text: {
        fontFamily: "MontserratSemiBold",
        color: "#000000",
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 20,
    },
    _logo: {
        width: 172,
        height: 35

    },
    _card1: {
        elevation: 2,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 100,
        alignItems: "center",
        marginTop: 30,
    },
    _premium: {
        color: "#EFBF00",
        fontWeight: "bold",
        fontFamily: "MontserratSemiBold",
        fontSize: 20

    },
    _standard: {
        color: "#30439B",
        fontWeight: "bold",
        fontFamily: "MontserratSemiBold",
        fontSize: 10,
        marginTop: 10,
        paddingLeft: 5

    },
    _premium_des: {
        // fontFamily: "MontserratSemiBold",
        fontSize: 16,
        color: "gray",

    },
    _heading: {
        color: "black",
        fontFamily: "MontserratSemiBold",
        fontSize: 20,
        paddingLeft: 10,
        marginBottom: 10
    },
    _mob_number_setting_main: {
        elevation: 8,
        padding: 2,
        margin: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    _mob_number_setting_main_sett: {


        margin: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    _mob_number_setting_main3: {
        padding: 2,
        margin: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    _notification_main: {
        elevation: 8,
        margin: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: 2
    },
    _mob_number_setting_main2: {
        elevation: 8,
        padding: 2,
        margin: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: 10
    },
    _mob_number_heading: {
        color: "gray",
        fontFamily: "MontserratSemiBold",
        fontSize: 15

    },
    _mob_number: {
        color: "gray",
        fontFamily: "MontserratSemiBold",
        fontSize: 15
    },
    _username: {
        color: "gray",
        fontSize: 15
    },
    _current_location: {
        color: "#30439B",
        fontFamily: "MontserratSemiBold",
        fontSize: 15
    },
    _global: {
        color: "gray",
        fontFamily: "MontserratSemiBold",
        fontSize: 15,
        paddingTop: 20
    },

    _global_dis: {
        color: "gray",
        fontSize: 15,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 20
    },
    _support: {
        elevation: 8,
        backgroundColor: "white",
        padding: 3,
        alignItems: "center",
        margin: 1
    },
    button: {
        backgroundColor: "#CA2C30",
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

    _delete_account_button: {
        borderRadius: 50,
        width: "50%",
        alignSelf: "center",
        marginTop: 30
    },
    _delete_account_button_txt: {
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 1,
        textAlign: "center",
        color: "#30439B",
        borderBottomColor: "#30439B",
        borderBottomWidth: 1,
        fontSize: 22,
        fontFamily: "MontserratSemiBold"
    },
    // model
    centeredView: {
        flex: 1,
        // marginTop: 22,
        backgroundColor: 'rgba(0,0,6,0.7)',

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        // alignItems: "center",
        shadowColor: "#000",
        // alignSelf:"center",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8
    },
    _premium_logo: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: 242,
        height: 47,
        marginBottom: 30,
        marginLeft: -30
    },
    _features: {
        width: "50%"

    },
    _premium_view: {
        width: "50%"
    },
    _premium_heading: {
        fontSize: 18,
        color: "#EFBF00",
        fontWeight: "bold",
        textAlign: "center"
    },
    _premium_heading2: {
        fontSize: 18,
        color: "#30439B",
        fontWeight: "bold",
        textAlign: "center"
    },
    _features_heading: {
        fontSize: 18,
        color: "#CA2C30",
        fontWeight: "bold",
        textAlign: "center"
    },
    _features_text: {
        // textAlign: "center",
        marginTop: 10,
        // fontWeight: "bold",
        fontSize: 15


    },
    _premium_text: {
        color: "#CA2C30",
        textAlign: "center",
        marginTop: 10,
        fontSize: 15


    },
    _continue_button: {
        backgroundColor: "#30439B",
        width: "70%",
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 40
    },
    _continue_button2: {
        backgroundColor: "#8B8B8B",
        width: "70%",
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 40
    },
    _continue_button_text: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
        paddingTop: 5,
        paddingBottom: 10
    },
    _text_area: {
        // backgroundColor: "red",
        width: "80%"
    },
    _button_area: {
        // backgroundColor: "green",
        width: "20%"

    }
});

export default Setting;
