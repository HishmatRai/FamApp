

import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar

} from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo, Ionicons, MaterialIcons, EvilIcons, SimpleLineIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get('window');

let calTime;
let cameraRef;

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};


const Camera1 = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [isCameraUiOn, setIsCameraUiOn] = useState(false);
    const [isCapturing, setIsCapturing] = useState(false);
    const [flashMode, setFlashMode] = useState(true);
    const [capturePhoto, setCapturePhoto] = useState(null);
    const [galleryPic, setGalleryPic] = useState(null);
    const [showeffect, setshoweffect] = useState(false);




    const snap = async () => {
        if (cameraRef) {
            let photo = await cameraRef.takePictureAsync({
                quality: 0.5,
            });
            setCapturePhoto(photo.uri);
            setIsCapturing(false);
            setIsCameraUiOn(false);
        }
    };

    const getCameraPermission = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    useEffect(() => {
        getCameraPermission();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


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
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor="white" translucent={true} />
            <View style={{ flex: 1 }}>
                <Camera
                    style={{ flex: 1 }}
                    type={type}
                    ref={(ref) => (cameraRef = ref)}
                    flashMode={
                        flashMode
                            ? Camera.Constants.FlashMode.on
                            : Camera.Constants.FlashMode.off
                    }>

                    {/* >>>>>>>>>>>>>>>> captures <<<<<<<<<<<<< */}

                    <View style={styles._bottom_tab_2}>

                        <TouchableOpacity
                            onPress={() => {
                                setIsCapturing(true);
                                snap();
                            }}
                        >
                            <Image source={require('./../../assets/video-_button.png')} style={styles._video_recorder} />

                        </TouchableOpacity>

                    </View>

                </Camera>
            </View>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({

    _bottom_tab_2: {
        position: "absolute",
        bottom: 40,
        flexDirection: "row",
        width: "90%",
        margin: 20,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"

    },
    _video_recorder: {
        height: 94,
        width: 94
    },

})


export default Camera1;
