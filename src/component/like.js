import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity, Image } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Like = (props) => {
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
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center", justifyContent: "center" }}>
          {/* >>>>>>>>>>>>> 01 <<<<<<<<<<<< */}
          <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
          >
            <View style={styles._user_profile_main}>
              <View style={styles._user_image_view}>
                <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
              </View>
            </View>
            <View style={styles._user_name_message}>
              <Text style={styles._user_name}>Annel L , Hishmat, Fatima </Text>
              <Text style={styles._user_message}>& 13 others like your photos</Text>
            </View>
          </TouchableOpacity>
          {/* >>>>>>>>>>>>> 01 <<<<<<<<<<<< */}
          <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
          >
            <View style={styles._user_profile_main}>
              <View style={styles._user_image_view}>
                <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
              </View>
            </View>
            <View style={styles._user_name_message}>
              <Text style={styles._user_name}>Annel L , Hishmat, Fatima </Text>
              <Text style={styles._user_message}>& 13 others like your photos</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  _user_profile_main: {
    width: "30%"
  },
  _user_image_view: {
    height: 58,
    width: 58,
    borderRadius: 100,
  },
  _user_image: {
    height: 58,
    width: 58,
    borderRadius: 100,
  },
  _user_name_message: {
    width: "70%",

  },
  _user_name: {
    fontWeight: "bold",
    paddingTop:10
  },
  _user_message: {
    color: "gray"
  }

});

export default Like;
