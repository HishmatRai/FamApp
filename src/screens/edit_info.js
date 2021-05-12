import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, TextInput, StatusBar, ScrollView, TouchableOpacity, Picker } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ToggleButton from './../component/togglebutton'
import AboutInput from './../component/about_input'
import RedioButton from './../component/radiobutton'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const EditEnfo = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [selectedValue, setSelectedValue] = useState("java");

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

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
                        <Ionicons name="ios-arrow-back" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={styles._header_text}>Edit Enfo</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <<<<<<<<<<<< About >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>About Johan</Text>
                        <View style={styles._mob_number_setting_main}>
                            <AboutInput />
                        </View>
                    </View>

                    {/* <<<<<<<<<<<< Area Of Interest >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Area Of Interest</Text>
                        {/* <TextInput
                            style={styles._mob_number_setting_main}
                            placeholder="Hard Work, Chairty , Gun Fight, Humanilism"
                        /> */}
                        <View style={styles._mob_number_setting_main}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 30, width: "100%", color: "gray" }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

                            >
                                <Picker.Item label="Hard Work, Chairty , Gun Fight" value="java" />
                                <Picker.Item label="Gun Fight, Humanilism" value="js" />
                                <Picker.Item label="Hard Work,   Humanilism" value="js1" />
                                <Picker.Item label="Hard Work, Chairty " value="js2" />
                                <Picker.Item label="Hard Work , Gun Fight, Humanilism" value="js3" />
                                <Picker.Item label=" Chairty , Gun Fight, Humanilism" value="js5" />
                            </Picker>
                        </View>

                    </View>


                    {/* <<<<<<<<<<<< Job Title >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Job Title</Text>
                        <TextInput
                            style={styles._mob_number_setting_main}
                            placeholder="Add job title"
                        />
                    </View>

                    {/* <<<<<<<<<<<< Add Company >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Add Company</Text>
                        <TextInput
                            style={styles._mob_number_setting_main}
                            placeholder="Add Company"
                        />
                    </View>

                    {/* <<<<<<<<<<<< School >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>School</Text>
                        <TextInput
                            style={styles._mob_number_setting_main}
                            placeholder="Add School"
                        />
                    </View>

                    {/* <<<<<<<<<<<< Livig in >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Living in</Text>
                        <TextInput
                            style={styles._mob_number_setting_main}
                            placeholder="Add city"
                        />
                    </View>
                            {/* <<<<<<<<<<<< Account Setting >>>>>>>>>>>> */}
                            <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Show My Instagram Photos</Text>
                        <TouchableOpacity style={styles._mob_number_setting_main}>
                            <Text style={styles._connect_instagram}>Connect Instagram</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<< Gender >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Gender</Text>
                        <RedioButton />
                    </View>



            

                    {/* <<<<<<<<<<<< Control Your Profile >>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles._heading}>Control Your Profile</Text>
                        <View style={styles._notification_main}>
                            <View style={styles._mob_number_setting_main3}>
                                <View style={styles._text_area}>
                                    <Text style={styles._mob_number_heading}>Don't Show My Age</Text>
                                </View>
                                <View style={styles._button_area}>
                                    <ToggleButton />
                                </View>
                            </View>
                            <View style={styles._mob_number_setting_main3}>
                                <View style={styles._text_area}>
                                    <Text style={styles._mob_number_heading}>Make My Distance Invisible</Text>
                                </View>
                                <View style={styles._button_area}>
                                    <ToggleButton />
                                </View>
                            </View>
                        </View>
                    </View>
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
    _mob_number_setting_main3: {
        padding: 2,
        margin: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    _notification_main: {
        margin: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: 2
    },

    _mob_number_heading: {
        color: "gray",
        // fontFamily: "MontserratSemiBold",
        fontSize: 15

    },
    _connect_instagram: {
        color: "#30439B",
        fontFamily: "MontserratSemiBold",
        fontSize: 15

    },
    _mob_number: {
        color: "gray",
        fontFamily: "MontserratSemiBold",
        fontSize: 15
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

export default EditEnfo;
