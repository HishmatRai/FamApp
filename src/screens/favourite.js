import React from "react";
import { View, StyleSheet, Text, Image, StatusBar, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import RBSheet from "react-native-raw-bottom-sheet";
import DistanceSlider from './../component/distance_slider'
import AgeSlider from './../component/age_slider'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Intrestingbutton from './../component/interested_radio_button'
import Togglebuttom from './../component/togglebutton'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { LinearGradient } from 'expo-linear-gradient';
class Favourite extends React.Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {



    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
        <View style={{ margin: 20 }}>
          {/* >>>>>>>>>>>>>>>>>>  Header <<<<<<<<<<<<<<<< */}
          <View style={styles._header_main}>
            <Text style={styles._heading}>Favourites</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => this.RBSheet.open()}
              >
                <MaterialCommunityIcons name="filter-variant" size={24} color="#006B15" />
              </TouchableOpacity>
              <Menu
                ref={this.setMenuRef}
                button={<Feather onPress={this.showMenu} name="more-vertical" size={24} color="#006B15" />}
              >
                <MenuItem onPress={this.hideMenu}>Delete Chat</MenuItem>
                <MenuItem onPress={this.hideMenu}>Block User</MenuItem>
              </Menu>
            </View>
          </View>

          {/* >>>>>>>>>>>>>>>>>>  Body <<<<<<<<<<<<<<<< */}

          <ScrollView showsVerticalScrollIndicator={false} >
            {/* >>>>>>>>>>>> 1 <<<<<<<<<< */}
            <View style={styles._card_main}>

              {/* card 1 */}
              <View style={styles._Card_first}>
                <View style={styles._image_main}>
                  <Image source={require('./../../assets/favourite1.png')} style={styles._user_image} />
                </View>
                <Text style={styles._user_name}>Jenifer Jane</Text>
                <View style={styles._active_main}>
                  <Octicons name="primitive-dot" size={15} color="green" />
                  <Text style={styles._active}>Active Now</Text>
                </View>
              </View>

              {/* card 2 */}
              <View style={styles._Card_first}>
                <View style={styles._image_main}>
                  <Image source={require('./../../assets/favourite2.png')} style={styles._user_image} />
                </View>
                <Text style={styles._user_name}>Christina</Text>
                <View style={styles._active_main}>
                  <Octicons name="primitive-dot" size={15} color="green" />
                  <Text style={styles._active}>Active Now</Text>
                </View>
              </View>
            </View>

            {/* >>>>>>>>>>>> 1 <<<<<<<<<< */}
            <View style={styles._card_main}>

              {/* card 2 */}
              <View style={styles._Card_first}>
                <View style={styles._image_main}>
                  <Image source={require('./../../assets/favourite3.png')} style={styles._user_image} />
                </View>
                <Text style={styles._user_name}>Haidar</Text>
                <View style={styles._active_main}>
                  <Octicons name="primitive-dot" size={15} color="green" />
                  <Text style={styles._active}>Active Now</Text>
                </View>
              </View>

              {/* card 2 */}
              <View style={styles._Card_first}>
                <View style={styles._image_main}>
                  <Image source={require('./../../assets/favourite4.png')} style={styles._user_image} />
                </View>
                <Text style={styles._user_name}>Maria</Text>
                <View style={styles._active_main}>
                  <Text style={styles._last_seen}>Last seen :</Text>
                  <Text style={styles._last_seen}>4h ago</Text>
                </View>
              </View>
            </View>

            {/* >>>>>>>>>>>> 1 <<<<<<<<<< */}
            <View style={styles._card_main}>
              {/* card 3 */}
              <View style={styles._Card_first}>
                <View style={styles._image_main}>
                  <Image source={require('./../../assets/favourite5.png')} style={styles._user_image} />
                </View>
                <Text style={styles._user_name}>Tashy</Text>
                <View style={styles._active_main}>
                  <Octicons name="primitive-dot" size={15} color="green" />
                  <Text style={styles._active}>Active Now</Text>
                </View>
              </View>

              {/* card 2 */}
              <View style={styles._Card_first}>
                <View style={styles._image_main}>
                  <Image source={require('./../../assets/favourite6.png')} style={styles._user_image} />
                </View>
                <Text style={styles._user_name}>Angelena</Text>
                <View style={styles._active_main}>
                  <Octicons name="primitive-dot" size={15} color="green" />
                  <Text style={styles._active}>Active Now</Text>
                </View>
              </View>
            </View>
            <View style={{ marginBottom: 100 }}></View>
          </ScrollView>
        </View>
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
                    <Text style={styles._reset}>Female</Text>
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


              <TouchableOpacity style={styles._done_button}>
                <Text style={styles._done_button_text}>Done</Text>
                <LinearGradient
                  // Button Linear Gradient
                  end={[1.0, 0.5]}
                  start={[0.0, 0.5]}
                  locations={[0.0, 1.0]}
                  colors={['#006F01', '#00F710']}
                  style={{ alignItems: 'center', borderRadius: 5, borderRadius: 50 }}>

                  <Text style={styles._done_button_text}>Done</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 40 }}></View>
          </ScrollView>
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  _header_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
    marginBottom: 10
  },
  _heading: {
    fontWeight: "bold",
    fontSize: 35
  },
  _card_main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _Card_first: {
    elevation: 2,
    width: "48%",
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: "white",


  },
  _active_main: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20
  },
  _image_main: {
    width: 154,
    height: 193,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  _user_image: {
    width: 154,
    height: 193,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  _user_name: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 15,
    // backgroundColor:"red",
    width: "90%",
    alignSelf: "center"
  },
  _active: {
    color: "#757E90",
    paddingLeft: 10
  },
  _last_seen: {
    color: "#757E90",
    paddingLeft: 3
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
  _filter: {
    fontWeight: "bold",
    fontSize: 22
  },
  _location: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#00841A"
  },
  _reset: {
    fontSize: 15
  },
  _done_button: {
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

export default Favourite;
