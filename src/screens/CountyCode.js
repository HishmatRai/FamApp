import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, StatusBar, Text, TextInput, TouchableOpacity,ScrollView } from "react-native";
import CountryCodePicker from './../../CountryCodePicker'
import { LinearGradient } from 'expo-linear-gradient';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const CountyCode = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [mobileNum, setMobileNum] = React.useState("");
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
      <ScrollView>
      <Image source={require('./../../assets/logo.png')} style={styles._logo} />
      <View style={{ margin: 20 }}>
        <View style={styles._country_picker_main}>
          <View style={styles._code_main}>
            <CountryCodePicker />
          </View>
          <View style={styles._input_main}>
            <TextInput
              placeholder="Enter Mobile No."
              value={mobileNum}
              onChangeText={(mobileNum) => setMobileNum(mobileNum)}
              style={styles._input}
              underlineColor="black"
              placeholderTextColor="black"
              keyboardType={"numeric"}
            />
          </View>
        </View>
        <Text style={styles._get_otp}>Get OTP</Text>
        <View style={{ alignSelf: "center",marginTop:20 }}>
          <Text style={{ color: "#7F7F7F", fontSize: 12 }}>By continuing, I confirm that i have read & agree to the</Text>
          <View style={{flexDirection:"row",alignItems:"center",alignSelf:"center"}}>
            <TouchableOpacity>
              <Text style={{color:"#282F39",fontSize:12}}>Terms & conditions</Text>
            </TouchableOpacity>
            <Text style={{ color: "#7F7F7F", fontSize: 12 }}> and </Text>
            <TouchableOpacity>
              <Text style={{color:"#282F39",fontSize:12}}>Privacy policy</Text>
            </TouchableOpacity>
          </View>
        </View>
                 {/* <<<<<<<< Login Button >>>>>>>>> */}
                 <TouchableOpacity
                            style={styles.button}
                            onPress={() => props.navigation.navigate("OTPVerification")}
                        >

                            <LinearGradient
                                // Button Linear Gradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#006F01', '#00F710']}
                                style={{ alignItems: 'center', borderRadius: 5, borderRadius: 50 }}>

                                <Text style={styles._button_txt}>CONTINUE</Text>
                            </LinearGradient>
                        </TouchableOpacity>
      </View>
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
    alignSelf: "center",
    marginTop: 100,
    width: 100,
    height: 135
  },
  _country_picker_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop:50
  },
  _code_main: {
    width: "35%",
    borderWidth: 2,
    borderColor: '#03F435',
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  _input_main: {
    width: "63%",
    borderWidth: 2,
    borderColor: '#03F435',
    borderRadius: 5,
    height: 50,
    justifyContent: "center"
  },
  _input: {
    paddingLeft: 10,
    height: 50,
    fontSize: 18,
    paddingRight: 10
  },
  _get_otp: {
    fontSize: 20,
    color: "#6E6E6E",
    textAlign: "center",
    marginTop: 23,
    marginBottom:20
  },
  button: {
    // backgroundColor: "green",
    borderRadius: 50,
    width: "90%",
    alignSelf: "center",
    marginTop: 50
},
_button_txt: {
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "MontserratSemiBold"
},

});

export default CountyCode;
