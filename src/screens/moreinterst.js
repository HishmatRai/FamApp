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

const Moreinterest = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [galleryPic, setGalleryPic] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [images, setimages] = useState([])

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    }, []);

    openGallert = async () => {
        let arr = images
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            arr.push(result.uri)
            setimages(arr)

            // setGalleryPic(result.uri);
        }
    }


    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         setLocation(location);
    //     })();
    // }, []);

    const locationPermission = () => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }
    console.log("------------------------------------------->", images)
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
                    <TouchableOpacity onPress={() => locationPermission()}>
                        <MaterialIcons name="my-location" size={24} color="#F03030" />
                    </TouchableOpacity>
                </View>

                {/* <<<<<<<< Gender <<<<<<<< */}
                <Text style={styles._gender}>Gender</Text>
                <RadioButton />


                {/* <<<<<<<< Area Of Interest <<<<<<<< */}
                <Text style={styles._gender}>Area Of Interest</Text>

                {/* <<<<<<<<<<  1 >>>>>>>>>>>.*/}
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Trust</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Gun Rights</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Charity</Text>
                    </TouchableOpacity>
                </View>

                {/* <<<<<<<<<<  2 >>>>>>>>>>>.*/}
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips2}>
                        <Text style={styles._chips_text2}>Hard Work</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Self-help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips2}>
                        <Text style={styles._chips_text2}>Justice</Text>
                    </TouchableOpacity>
                </View>


                {/* <<<<<<<<<<  3 >>>>>>>>>>>.*/}
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips2}>
                        <Text style={styles._chips_text2}>Dignity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Free Speech</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>MAGA</Text>
                    </TouchableOpacity>
                </View>

                {/* <<<<<<<<<<  4 >>>>>>>>>>>.*/}
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips2}>
                        <Text style={styles._chips_text3}>Back the blue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text4}>Self - reliance</Text>
                    </TouchableOpacity>
                </View>

                {/* <<<<<<<<<<  5 >>>>>>>>>>>.*/}
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>USA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips2}>
                        <Text style={styles._chips_text2}>Humility</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Capitalism</Text>
                    </TouchableOpacity>
                </View>

                {/* <<<<<<<<<<  6 >>>>>>>>>>>.*/}
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text5}>Free  market</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text5}>Indivisalism</Text>
                    </TouchableOpacity>
                </View>

                {/* <<<<<<<<<<  7 >>>>>>>>>>>.*/}
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text5}>Constitution</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text4}>Support Troops</Text>
                    </TouchableOpacity>
                </View>


                {/* <<<<<<<<<<  8 >>>>>>>>>>>.*/}
                <View style={styles._chips_main}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Respect</Text>
                    </TouchableOpacity>
                </View>




                {/* <<<<<<<< Add Photos <<<<<<<< */}
                <Text style={styles._gender}>Add Photos</Text>
                <View style={styles._add_photos_main}>
                    <View>
                        <View style={styles._add_photos_view}>
                        </View>
                        <TouchableOpacity style={styles._add_icon}
                            onPress={() => openGallert()}
                        >

                            <Ionicons name="md-add-circle" size={24} color="#CA2C30" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        {images.length !== 1
                            ? images.map((val, i) => {
                                return (
                                    <View style={styles._add_photos_view}>
                                        <Image source={{ uri: val }} style={styles._add_photos_show} />
                                    </View>
                                    // <Image source={val} style={styles._add_photos_show} />
                                )
                            })
                            :
                            null
                        }
                    </ScrollView>
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
        width: 200,
        height: 40,
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
        // width: "30%"
    },
    _chips2: {
        borderRadius: 15,
        borderColor: "#30439B",
        borderWidth: 1,
        // width: "30%"
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
        fontSize: 15,
        textAlign: "center"
    },
    _chips_text2: {
        color: "#30439B",
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    },
    _chips_text3: {
        color: "#30439B",
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    },
    _chips_text4: {
        color: "#CA2C30",
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 5,
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    },
    _chips_text5: {
        color: "#CA2C30",
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        fontWeight: "bold",
        fontSize: 15,
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
        borderRadius: 5,
        margin: 5
    },
    _add_icon: {
        alignSelf: "flex-end",
        marginTop: -25,
        marginLeft: 60,

    },
    _date_picker: {
        marginTop: -9,
        // marginRight: 50,
        backgroundColor: "white"
    },

    _add_photos_show: {
        flex: 1
    }

});

export default Moreinterest;
