import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from './../component/imageslider'
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from '@expo/vector-icons';
import DistanceSlider from './../component/distance_slider'
import Intrestingbutton from './../component/interested_radio_button'
import AgeSlider from './../component/age_slider'
import Togglebuttom from './../component/togglebutton'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Explore = (props) => {
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
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
      <View style={{ margin: 20 }}>
        {/* >>>>>>>>>>>>>>>>>>>>> Header <<<<<<<<<<<<<<<<<<<<<<<<<<< */}
        <View style={styles._header_main}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Notification")}>
            <Ionicons name="ios-notifications" size={24} color="#ED3030" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.RBSheet.open()}
          >
            <MaterialCommunityIcons name="filter-variant" size={24} color="#ED3030" />
          </TouchableOpacity>

        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* images */}
          <View style={styles._image_main_view}>
            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>

            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>

            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>

            <View style={styles._image_main}>
              <Image source={require('./../../assets/explore1.png')} style={styles._profile_images} />
            </View>
          </View>

          {/* large image */}
          <Slider path={props} />

        </ScrollView>
      </View>
      {/* bottom sheet */}
      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
        height={600}
        openDuration={250}
        customStyles={{
          container: {
            // justifyContent: "center",
            // alignItems: "center",
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}
      >
        <ScrollView>
          {/* bottom sheeet */}
          <View style={{ marginRight: 30, marginLeft: 30, marginTop: 10 }}>
            {/* <<<<<<<<<<<<<<<<<<<<<<< Filter >>>>>>>>>>>>>>>>>>>>> */}
            <View style={styles._bottm_sheet_main}>
              <TouchableOpacity
                onPress={() => alert("dfdfd")}
              >
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles._filter}>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles._reset}>Reset</Text>
              </TouchableOpacity>
            </View>

            {/* <<<<<<<<<<<<<<<<<<<<<<< Location >>>>>>>>>>>>>>>>>>>>> */}
            <View style={styles._bottm_sheet_main}>
              <Text style={styles._location}>Location</Text>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text style={styles._reset}>New York</Text>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* <<<<<<<<<<<<<<<<<<<<<<< Location >>>>>>>>>>>>>>>>>>>>> */}
            <View style={styles._bottm_sheet_main2}>
              <View style={styles._bottm_sheet_main3}>
                <Text style={styles._location}>Distance</Text>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  {/* <Entypo name="chevron-small-left" size={24} color="black" /> */}
                  {/* <Text style={styles._reset}>3 mi</Text> */}
                </TouchableOpacity>
              </View>
              <DistanceSlider />
            </View>
            {/* <<<<<<<<<<<<<<<<<<<<<<< Interested in >>>>>>>>>>>>>>>>>>>>> */}
            <View style={styles._bottm_sheet_main2}>
              <View style={styles._bottm_sheet_main3}>
                <Text style={styles._location}>Interested in</Text>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <Text style={styles._reset}>Woman</Text>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Intrestingbutton />
            </View>

            {/* <<<<<<<<<<<<<<<<<<<<<<< Age >>>>>>>>>>>>>>>>>>>>> */}
            <View style={styles._bottm_sheet_main2}>
              <View style={styles._bottm_sheet_main3}>
                <Text style={styles._location}>Age</Text>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <Text style={styles._reset}>20 - 25</Text>
                </TouchableOpacity>
              </View>
              <AgeSlider />
            </View>

            {/* <<<<<<<<<<<<<<<<<<<<<<< Height >>>>>>>>>>>>>>>>>>>>> */}
            <View style={styles._bottm_sheet_main2}>
              <View style={styles._bottm_sheet_main3}>
                <Text style={styles._location}>Height</Text>
              </View>
              <AgeSlider />
            </View>

            {/* <<<<<<<<<<<<<<<<<<<<<<< Match Sound >>>>>>>>>>>>>>>>>>>>> */}
            <View style={styles._bottm_sheet_main}>
              <View style={styles._text_area}>
                <Text style={styles._location}>Match Sound</Text>
              </View>

              <View style={styles._button_area}>
                <Togglebuttom />
              </View>
            </View>


            <TouchableOpacity style={styles._done_button}
            // onPress={() => props.navigation.navigate("Home")}
            >
              <Text style={styles._done_button_text}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 40 }}></View>
        </ScrollView>
      </RBSheet>
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
    marginBottom: 10
  },
  _image_main_view: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  _image_main: {
    width: 54,
    height: 60,
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: "red"
  },
  _profile_images: {
    width: 54,
    height: 60,
    borderRadius: 10
  },
  _large_image_main: {
    width: 299,
    height: 361,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15
  },
  _large_image: {
    width: 299,
    height: 361,
    borderRadius: 15

  },
  _bottm_sheet_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginTop: 20
  },
  _filter: {
    fontWeight: "bold",
    fontSize: 22
  },
  _reset: {
    fontSize: 15
  },
  _location: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#CA2C30"
  },
  _bottm_sheet_main3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10
  },
  _bottm_sheet_main2: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginTop: 20
  },
  _done_button: {
    backgroundColor: "#CA2C30",
    borderRadius: 10,
    width: "50%",
    alignSelf: "center",
    marginTop: 20
  },
  _done_button_text: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    paddingBottom: 7,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 7,
    color: "white"
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

export default Explore;
