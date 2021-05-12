
import React from "react";
import { AppLoading } from "expo";
// import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Navigation from './src/navigation/navigation'
import Getstart from './src/screens/getstart'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      showMe: true
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      MontserratMediumItalic: require('./src/fontfamily/MontserratMediumItalic.ttf'),
      MontserratMedium: require('./src/fontfamily/MontserratMedium.ttf'),
      MontserratBlackItalic: require("./src/fontfamily/MontserratBlackItalic.ttf"),
      MontserratBold: require("./src/fontfamily/MontserratBold.ttf"),
      MontserratBoldItalic: require("./src/fontfamily/MontserratBoldItalic.ttf"),
      MontserratExtraBold: require("./src/fontfamily/MontserratExtraBold.ttf"),
      MontserratThinItalic: require("./src/fontfamily/MontserratThinItalic.ttf"),
      MontserratThin: require("./src/fontfamily/MontserratThin.ttf"),
      MontserratSemiBoldItalic: require("./src/fontfamily/MontserratSemiBoldItalic.ttf"),
      MontserratExtraBoldItalic: require("./src/fontfamily/MontserratExtraBoldItalic.ttf"),
      MontserratExtraLight: require("./src/fontfamily/MontserratExtraLight.ttf"),
      MontserratExtraLightItalic: require("./src/fontfamily/MontserratExtraLightItalic.ttf"),
      MontserratItalic: require("./src/fontfamily/MontserratItalic.ttf"),
      MontserratLight: require("./src/fontfamily/MontserratLight.ttf"),
      MontserratLightItalic: require("./src/fontfamily/MontserratLightItalic.ttf"),
      MontserratRegular: require("./src/fontfamily/MontserratRegular.ttf"),
      MontserratSemiBold: require("./src/fontfamily/MontserratSemiBold.ttf"),

    });
    setTimeout(() => {
      this.setState({
        showMe: false
      })
    },
      0)
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      this.state.showMe ?
        <Getstart />
        :
        <Navigation />
    )
  }
}