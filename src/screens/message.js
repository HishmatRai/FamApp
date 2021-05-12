import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Message = (props) => {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
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

                {/* >>>>>>>>>>>>>>>>>>>>> Header >>>>>>>>>>>>>>>>>>>>> */}
                <View style={styles._header_main}>
                    <View style={styles._data}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/message.png')} style={styles._user_profile} />
                            <Octicons name="primitive-dot" size={24} color="#07FC07" style={styles._active_icon} />
                        </View>
                        <View style={styles._user_name_main}>
                            <Text style={styles._user_name}>Johan Smith</Text>
                            <Text style={styles._status}>Online</Text>
                        </View>
                    </View>
                    <View style={styles._cal}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("AudioCall")}>

                            <Ionicons name="ios-call" size={24} color="#00841A" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Vodeocall")}>
                            <FontAwesome5 name="video" size={22} color="#00841A" />
                        </TouchableOpacity>
                        <Menu
                            ref={this.setMenuRef}
                            button={<Feather onPress={this.showMenu} name="more-vertical" size={24} color="#00841A" />}
                        >
                            <MenuItem onPress={this.hideMenu}>Delete Conversation</MenuItem>
                            <MenuItem onPress={this.hideMenu}>Block User</MenuItem>
                        </Menu>
                    </View>
                </View>
            </View>
            <ScrollView >
                <View style={{ margin: 20 }}>
                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message receive >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%" }}>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/message1.png')} style={styles._profile_main_of_receive_message} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "80%" }}>
                            <Image source={require('./../../assets/first_messge_receive.png')} style={{ width: 17, height: 17 }} />
                            <Text style={styles.first_messge_receive}>Hi how r u?</Text>
                        </View>
                    </View>
                    {/*<<<<<<<<<<<<<<<<<<<<<< user 2nd message receive >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%" }}>
                        <View style={styles._profile_main_of_receive_message}></View>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "80%" }}>
                            <Image source={require('./../../assets/second_messge_receive.png')} style={{ width: 17, height: 17 }} />
                            <Text style={styles.first_messge_receive}>fsdfdsf fsd fsd fs df dsfd sf sddfdsf ds fd s dfds f sdfdfds</Text>
                        </View>
                    </View>

                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message send >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%", marginTop: 10, alignSelf: "flex-end" }}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "80%", alignSelf: "flex-end", justifyContent: "flex-end", marginRight: 10 }}>
                                <Text style={styles.first_messge_sent}>fsdfddis</Text>
                                <Image source={require('./../../assets/first_messge_sent.png')} style={{ width: 17, height: 17 }} />
                            </View>
                        </View>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/message1.png')} style={styles._profile_main_of_sent_message} />
                        </View>
                    </View>

                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message receive >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%" }}>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/message1.png')} style={styles._profile_main_of_receive_message} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "80%" }}>
                            <Image source={require('./../../assets/first_messge_receive.png')} style={{ width: 17, height: 17 }} />
                            <Text style={styles.first_messge_receive}>fsdfdsfdfds</Text>
                        </View>
                    </View>


                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message send >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%", marginTop: 10, alignSelf: "flex-end" }}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "80%", alignSelf: "flex-end", justifyContent: "flex-end", marginRight: 10 }}>
                                <Text style={styles.first_messge_sent}>fsdf ds ds ds ddds</Text>
                                <Image source={require('./../../assets/first_messge_sent.png')} style={{ width: 17, height: 17 }} />
                            </View>
                        </View>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/message1.png')} style={styles._profile_main_of_sent_message} />
                        </View>
                    </View>
                    {/*<<<<<<<<<<<<<<<<<<<<<< user second message send >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%", alignSelf: "flex-end" }}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "80%", alignSelf: "flex-end", justifyContent: "flex-end", marginRight: 10 }}>
                                <Text style={styles.first_messge_sent}>fsdf ds ds ds ddds</Text>
                                <Image source={require('./../../assets/second_messge_sent.png')} style={{ width: 17, height: 17 }} />
                            </View>
                        </View>
                        <View style={styles._profile_main_of_receive_message}>
                        </View>
                    </View>

                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message receive >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%" }}>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/message1.png')} style={styles._profile_main_of_receive_message} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "80%" }}>
                            <Image source={require('./../../assets/first_messge_receive.png')} style={{ width: 17, height: 17 }} />
                            <Text style={styles.first_messge_receive}>fsdfdsfdfds</Text>
                        </View>

                    </View>

                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message send >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%", marginTop: 10, alignSelf: "flex-end" }}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "80%", alignSelf: "flex-end", justifyContent: "flex-end", marginRight: 10 }}>
                                <Image source={require('./../../assets/sendimage.png')} style={styles._send_img} />
                            </View>
                        </View>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/message1.png')} style={styles._profile_main_of_sent_message} />
                        </View>
                    </View>





                    <View style={{ marginBottom: 70 }}></View>
                </View>
            </ScrollView>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Message Option    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._message_main}>
                <TextInput
                    style={styles._input}
                    placeholder="Type a  message"
                />

                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Camera")}>
                    <Entypo name="camera" size={24} color="#00841A" style={{ marginLeft: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => openGallert()}>
                    <Ionicons name="ios-attach" size={24} color="#00841A" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="md-send" size={30} color="#00841A" style={{ marginRight: 10 }} />
                </TouchableOpacity>
            </View>
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
        justifyContent: "space-between",
        marginTop: 20,
    },
    _data: {
        flexDirection: "row",
        width: "70%",
        alignItems: "center"
    },
    _cal: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%",
        alignItems: "center"
    },
    _profile_main: {
        width: 47,
        height: 47,
        borderRadius: 100,
        alignItems: "center"
    },
    _user_profile: {
        width: 37,
        height: 37,
        borderRadius: 100,
        marginTop: 5
    },
    _active_icon: {
        marginTop: -20,
        marginLeft: 28
    },
    _user_name: {
        fontWeight: "bold",
        fontSize: 15
    },
    _status: {
        fontSize: 13
    },
    _user_name_main: {
        marginLeft: 10,
    },
    _profile_main_of_receive_message: {
        width: 46,
        height: 46,
        borderRadius: 100,
        marginRight: 5

    },
    _profile_main_of_sent_message: {
        width: 46,
        height: 46,
        borderRadius: 100,
        marginRight: 5

    },
    first_messge_receive: {
        backgroundColor: "#00841A",
        borderRadius: 100,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: -10,
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    first_messge_sent: {
        backgroundColor: "#2DFD56",
        borderRadius: 100,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: -10,
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    _message_main: {
        backgroundColor: "white",
        width: "90%",
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
        elevation: 8,
        padding: 5,
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    _input: {
        width: "35%",
        paddingBottom: 5,
        paddingTop: 5,
        marginRight: 20,
        paddingLeft:10,
        fontWeight: "bold"
    },
    _send_img: {
        width: 216,
        height: 160,
        borderRadius: 10
    },
    _time: {
        fontSize: 9,
        textAlign: "right"
    }


});

export default Message;
