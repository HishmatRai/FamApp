import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, StatusBar } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Getstart = (props) => {
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
      <StatusBar translucent hidden={true} />
      <Image source={require('./../../assets/nsp.png')} style={styles._background_img} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },
  _background_img: {
    width: "100%",
    height: "100%"
  }

});

export default Getstart;
