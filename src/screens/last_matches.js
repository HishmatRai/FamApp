import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ToggleButton from './../component/togglebutton'
import AboutInput from './../component/about_input'
import RedioButton from './../component/radiobutton'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const lastMatches = (props) => {
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
                        onPress={() => props.navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={20} color="#CA2C30" />
                    </TouchableOpacity>
                    <Text style={styles._header_text}>Last Matches</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* >>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<< */}
                    <View style={styles._matches_main}>
                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 2 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 3 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 4 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 5 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>
                    </View>

                    {/* >>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<< */}
                    <View style={styles._matches_main}>
                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 2 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 3 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 4 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 5 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>
                    </View>

                    {/* >>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<< */}
                    <View style={styles._matches_main}>
                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 2 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 3 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 4 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 5 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>
                    </View>

                    {/* >>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<< */}
                    <View style={styles._matches_main}>
                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 2 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 3 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 4 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 5 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>
                    </View>

                    {/* >>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<< */}
                    <View style={styles._matches_main}>
                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 2 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 3 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 4 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 5 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
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
    _header: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        marginBottom: 10

    },
    _header_text: {
        fontFamily: "MontserratSemiBold",
        color: "#CA2C30",
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 20,
    },

    _matches_main: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignItems: "center",
        marginTop:30
    },
    _matches_profile_main: {
        width: 61,
        height: 61,
        borderRadius: 100,
        marginRight: 15,
        marginTop: 20
    },
    _matches_profile: {
        width: 61,
        height: 61,
        borderRadius: 100,
    },
});

export default lastMatches;
