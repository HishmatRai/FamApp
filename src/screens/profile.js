import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Tabs from './../component/tabs'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Profile = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [galleryPic, setGalleryPic] = useState(null);
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    openGallert = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setGalleryPic(result.uri);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
            <View style={{ margin: 20 }}>
                {/* >>>>>>>>>>>>>>>>>>  Header <<<<<<<<<<<<<<<< */}
                <View style={styles._header_main}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#CA2C30" />
                    </TouchableOpacity>
                    <Text style={styles._heading}>Profile</Text>
                </View>
            </View>
            {/* >>>>>>>>>>>>>>>>>>  Nody <<<<<<<<<<<<<<<< */}
            <ScrollView showsVerticalScrollIndicator={false} >

                {/* >>>>>>>>>>>>>>>>>>  user profile <<<<<<<<<<<<<<<< */}
                <View style={{ margin: 20 }}>
                    <View style={{ alignSelf: "center" }}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/profile.png')} style={styles._user_profile} />
                        </View>
                        <Text style={styles._user_name}>Johan Smith</Text>
                        <Text style={styles.user_dis}>Perusing ABA. Love is life and We live only once. So your Life.</Text>
                    </View>

                    {/* >>>>>>>>>>>>>>>>>>  Setting media and edit <<<<<<<<<<<<<<<< */}
                    <View style={styles._sub_header_main}>
                        <TouchableOpacity style={styles._setting_main}
                            onPress={() => props.navigation.navigate("Setting")}
                        >
                            <Ionicons name="md-settings" size={34} color="#30439B" />
                            <Text style={styles._icons_heading}>Settings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._setting_main}
                            onPress={() => openGallert()}
                        >
                            <FontAwesome name="camera" size={34} color="#CA2C30" />
                            <Text style={styles._icons_heading}>Add Media</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._setting_main}
                            onPress={() => props.navigation.navigate("Editinfo")}>
                            <FontAwesome name="edit" size={34} color="#30439B" />
                            <Text style={styles._icons_heading}>Edit Info</Text>
                        </TouchableOpacity>
                    </View>

                    {/* >>>>>>>>>>>>>>>>>>  details <<<<<<<<<<<<<<<< */}
                    <View style={styles._details_main}>
                        <View style={styles._sub_main}>
                            <Feather name="message-circle" size={20} color="gray" />
                            <Text style={styles._message}>Hi! I'm Johan. I act in films and do film...</Text>
                        </View>

                        <View style={styles._sub_main}>
                            <MaterialIcons name="subscriptions" size={20} color="gray" />
                            <Text style={styles._counter}>88</Text>
                            <Text style={styles._subscription}>Subscription</Text>
                        </View>

                        <View style={styles._sub_main}>
                            <Feather name="users" size={20} color="gray" />
                            <Text style={styles._counter}>3m</Text>
                            <Text style={styles._subscription}>Followers</Text>
                        </View>

                        <View style={styles._sub_main}>
                            <Ionicons name="ios-heart-empty" size={20} color="gray" style={{marginRight:5}}/>
                            <Text style={styles._counter}>32k</Text>
                            <Text style={styles._subscription}>Likes</Text>
                        </View>

                        {/* <View style={styles._sub_main}>
                            <MaterialCommunityIcons name="email-outline" size={20} color="gray" />
                            <Text style={styles._counter}>38</Text>
                            <Text style={styles._subscription}>Likes</Text>
                        </View> */}

                        {/* <View style={styles._sub_main}>
                            <Ionicons name="ios-information-circle-outline" size={24} color="gray" />
                            <TouchableOpacity>
                                <Text style={styles._more_information_button_text}>More Information</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>

                <View style={styles._gray_line}></View>

                {/* >>>>>>>>>>>>>>>>>>  Matches <<<<<<<<<<<<<<<< */}

                <View style={{ margin: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20 }}>
                        <Text style={styles._last_matches}>Last Matches</Text>
                        {/* <TouchableOpacity
                            onPress={() => props.navigation.navigate("lastMatches")}>
                            <Text style={styles._more_information_button_text}>View All</Text>
                        </TouchableOpacity> */}
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 1>>>>>>>>>>>>>>>>>>>>. */}
                        <View>
                            <TouchableOpacity style={styles._matches_profile_main}>
                                <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._add_button}>
                                <Ionicons name="md-add-circle" size={24} color="#CA2C30" style={styles._add_icon} />
                            </TouchableOpacity>
                        </View>

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

                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< 6 >>>>>>>>>>>>>>>>>>>>. */}
                        <TouchableOpacity style={styles._matches_profile_main}>
                            <Image source={require('./../../assets/match1.png')} style={styles._matches_profile} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles._gray_line}></View>

                {/* >>>>>>>>>>>>>>>>>>>>>>>> tabs >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                <Tabs />
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    _header_main: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        marginBottom: 10
    },
    _heading: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 20
    },
    _profile_main: {
        width: 148,
        height: 148,
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center"
    },
    _user_profile: {
        width: 148,
        height: 148,
        borderRadius: 100,
    },
    _user_name: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30
    },
    user_dis: {
        color: "gray",
        fontSize: 16,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: "center",
        marginTop: 10
    },
    _sub_header_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    _setting_main: {
        alignItems: "center"
    },
    _icons_heading: {
        fontWeight: "bold",
        color: "gray",
        marginTop: 5
    },
    _details_main: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30
    },
    _sub_main: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center"
    },
    _message: {
        color: "gray",
        paddingLeft: 5
    },
    _counter: {
        color: "#CA2C30",
        paddingLeft: 10,
        marginRight: 20,
    },
    _subscription: {
        color: "gray",
    },
    _more_information_button_text: {
        color: "#30439B",
        fontSize: 15,
        marginLeft: 10
    },
    _gray_line: {
        backgroundColor: "#E2E2E2",
        width: "100%",
        height: 10
    },
    _last_matches: {
        fontWeight: "bold",
        fontSize: 15
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
    _add_button: {
        marginTop: -20,
        marginLeft: 45
    }
});

export default Profile;
