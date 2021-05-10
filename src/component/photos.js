import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Photos = (props) => {
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
            <View style={styles._photos_main}>
                <View style={styles._photos_main_view}>
                    <Image source={require('./../../assets/photos1.png')} style={styles._photos} />
                </View>

                <View style={styles._photos_main_view}>
                    <Image source={require('./../../assets/photos1.png')} style={styles._photos} />
                </View>

                <View style={styles._photos_main_view}>
                    <Image source={require('./../../assets/photos1.png')} style={styles._photos} />
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    _photos_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    _photos_main_view: {
        width: 99,
        height: 108,
        borderRadius: 20,
    },
    _photos: {
        width: 99,
        height: 108,
        borderRadius: 10,
    }


});

export default Photos;
