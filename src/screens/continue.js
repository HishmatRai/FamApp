import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import RadioButton from './../component/radiobutton'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MyDatePicker from './../component/datepicker'
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Continue = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [galleryPic, setGalleryPic] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<   LOGO SECTION  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false} >
                <Image source={require('./../../assets/updated_logo.png')} style={styles._logo} />

                {/* <<<<<<<< Name <<<<<<<< */}
                <View style={styles._name_main}>
                    <TextInput
                        style={styles._mob_number_setting_main}
                        placeholder="My First Name"
                        style={styles._name_input}
                        placeholderTextColor="#2545A3"
                    />
                </View>

                {/* <<<<<<<< Birthday <<<<<<<< */}
                <View style={styles._birthday_main}>
                    <Text style={styles._location}>My Birthday</Text>
                    <View style={styles._date_picker}>
                        <MyDatePicker />
                    </View>
                </View>


                {/* <<<<<<<< Location <<<<<<<< */}
                <View style={styles._location_main}>
                    <Text style={styles._location}>Location</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="my-location" size={24} color="#F03030" />
                    </TouchableOpacity>
                </View>

                {/* <<<<<<<< Gender <<<<<<<< */}
                <Text style={styles._gender}>Gender</Text>
                <RadioButton />


                {/* <<<<<<<< Area Of Interest <<<<<<<< */}
                <Text style={styles._gender}>Area Of Interest</Text>
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Free Speech</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Gun Rights</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Independence</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Morality</Text>
                    </TouchableOpacity>
                </View>
                {/* <<<<<<<< More Button <<<<<<<< */}
                <TouchableOpacity style={styles._more_button}
                    onPress={() => props.navigation.navigate("Moreinterest")}
                >
                    <Text style={styles._more_button_txt}>Add more interest</Text>
                </TouchableOpacity>


                {/* <<<<<<<< Add Photos <<<<<<<< */}
                <Text style={styles._gender}>Add Photos</Text>
                <View style={styles._add_photos_main}>
                    <View style={styles._add_photos_view}>
                        <Image source={require('./../../assets/addphoto1.png')} style={styles._add_photos_show} />
                    </View>
                    <View>
                        <View style={styles._add_photos_view}>
                        </View>
                        <TouchableOpacity style={styles._add_icon}
                            onPress={() => openGallert()}
                        >
                            <Ionicons name="md-add-circle" size={24} color="#CA2C30" />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={styles._add_photos_view}>
                        </View>
                        <TouchableOpacity style={styles._add_icon}
                            onPress={() => openGallert()}
                        >
                            <Ionicons name="md-add-circle" size={24} color="#CA2C30" />
                        </TouchableOpacity>
                    </View>
                </View>


                {/* <<<<<<<< Continue button >>>>>>>>> */}
                <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate("Agree")}
                >
                    <LinearGradient
                        // Button Linear Gradient
                        end={[1.0, 0.5]}
                        start={[0.0, 0.5]}
                        locations={[0.0, 1.0]}
                        colors={['#BD2B31', '#2B439E']}
                        style={{ alignItems: 'center', borderRadius: 5, borderRadius: 50 }}>
                        <Text style={styles._button_txt}>Continue</Text>
                    </LinearGradient>
                </TouchableOpacity>


                {/* <<<<<<<< Line >>>>>>>>> */}
                <Text style={styles._line}></Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _logo: {
        width: 143,
        height: 26,
        alignSelf: "center",
        marginTop: 60,
        marginBottom: 50
    },



    button: {
        // backgroundColor: "green",
        borderRadius: 50,
        width: "100%",
        alignSelf: "center",
        marginTop: 50,
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
        // position: "absolute",
        // bottom: 10,
        marginTop: 30
    },
    _name_main: {
        borderColor: "#CA2C30",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginTop: 20

    },
    _birthday_main: {
        borderColor: "#CA2C30",
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        marginTop: 20,
        flexDirection: "row"

    },
    _location_main: {
        borderColor: "#CA2C30",
        borderWidth: 1,
        borderRadius: 5,
        paddingBottom: 10,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 10,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    _name_input: {
        padding: 5,
        fontWeight: "bold"
    },
    _location: {
        color: "#2545A3",
        fontWeight: "bold",
        fontSize: 15
    },
    _gender: {
        color: "#2545A3",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 20,
        paddingLeft: 10,
        marginBottom: 10
    },
    _chips: {
        borderRadius: 15,
        borderColor: "#CA2C30",
        borderWidth: 1,
        width: "40%"
    },
    _chips_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    _chips_text: {
        color: "#CA2C30",
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "center"
    },
    _more_button_txt: {
        color: "#CA2C30"
    },
    _more_button: {
        marginTop: 10
    },
    _add_photos_main: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    _add_photos_view: {
        width: 85,
        height: 94,
        borderWidth: 1,
        borderColor: "#CA2C30",
        borderRadius: 5
    },
    _add_icon: {
        alignSelf: "flex-end",
        marginTop: -20,
        marginLeft: 70

    },
    _date_picker: {
        marginTop: -9,
        marginRight: 10
    }


});

export default Continue;
