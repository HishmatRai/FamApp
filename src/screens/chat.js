import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity, TextInput, Modal, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { LinearGradient } from 'expo-linear-gradient';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Chat = (props) => {
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
  const [dimensions, setDimensions] = useState({ window, screen });
  const [modalVisible, setModalVisible] = useState(false);
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
        {/* >>>>>>>>>>>>>>>>>>  Header <<<<<<<<<<<<<<<< */}
        <View style={styles._header_main}>
          <Text style={styles._heading}>Chats</Text>
          <View style={styles._serach_main}>
            <TextInput
              style={styles._serach}
              placeholder="Search"
            />
            <TouchableOpacity style={{ marginRight: 10 }}>
              <FontAwesome5 name="search" size={15} color="#2DFD56" />
            </TouchableOpacity>
          </View>
          <Menu
            ref={this.setMenuRef}
            button={<Feather onPress={this.showMenu} name="more-vertical" size={24} color="#363636" />}
          >
            <MenuItem onPress={this.hideMenu}>Delete Chat</MenuItem>
            <MenuItem onPress={this.hideMenu}>Block User</MenuItem>
          </Menu>
        </View>


        {/* >>>>>>>>>>>>>>>>>>  Body <<<<<<<<<<<<<<<< */}
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles._chat_main}>
            {/* >>>>>>>>>>>>> 01 <<<<<<<<<<<< */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => props.navigation.navigate("Message")}
            >
              <View style={styles._user_profile_main}>
                <View style={styles._user_image_view}>
                  <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
                </View>
              </View>
              <View style={styles._user_name_message}>
                <Text style={styles._user_name}>Annel L</Text>
                <Text style={styles._user_message}>Single, Looking for nice gay whi love nature ...</Text>
              </View>
            </TouchableOpacity>

            {/* >>>>>>>>>>>>> 02 <<<<<<<<<<<< */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => props.navigation.navigate("Message")}
            >
              <View style={styles._user_profile_main}>
                <View style={styles._user_image_view}>
                  <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
                </View>
              </View>
              <View style={styles._user_name_message}>
                <Text style={styles._user_name}>Annel L</Text>
                <Text style={styles._user_message}>Single, Looking  ...</Text>
              </View>
            </TouchableOpacity>

            {/* >>>>>>>>>>>>> 03 <<<<<<<<<<<< */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => props.navigation.navigate("Message")}>
              <View style={styles._user_profile_main}>
                <View style={styles._user_image_view}>
                  <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
                </View>
              </View>
              <View style={styles._user_name_message}>
                <Text style={styles._user_name}>Annel L</Text>
                <Text style={styles._user_message}>Single, Looking  ...</Text>
              </View>
            </TouchableOpacity>

            {/* >>>>>>>>>>>>> 04 <<<<<<<<<<<< */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => props.navigation.navigate("Message")}>
              <View style={styles._user_profile_main}>
                <View style={styles._user_image_view}>
                  <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
                </View>
              </View>
              <View style={styles._user_name_message}>
                <Text style={styles._user_name}>Annel L</Text>
                <Text style={styles._user_message}>Single, Looking  ...</Text>
              </View>
            </TouchableOpacity>

            {/* >>>>>>>>>>>>> 05 <<<<<<<<<<<< */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => props.navigation.navigate("Message")}>
              <View style={styles._user_profile_main}>
                <View style={styles._user_image_view}>
                  <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
                </View>
              </View>
              <View style={styles._user_name_message}>
                <Text style={styles._user_name}>Annel L</Text>
                <Text style={styles._user_message}>Single, Looking  ...</Text>
              </View>
            </TouchableOpacity>

            {/* >>>>>>>>>>>>> 06 <<<<<<<<<<<< */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => props.navigation.navigate("Message")}>
              <View style={styles._user_profile_main}>
                <View style={styles._user_image_view}>
                  <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
                </View>
              </View>
              <View style={styles._user_name_message}>
                <Text style={styles._user_name}>Annel L</Text>
                <Text style={styles._user_message}>Single, Looking  ...</Text>
              </View>
            </TouchableOpacity>

            {/* >>>>>>>>>>>>> 07 <<<<<<<<<<<< */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => props.navigation.navigate("Message")}>
              <View style={styles._user_profile_main}>
                <View style={styles._user_image_view}>
                  <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
                </View>
              </View>
              <View style={styles._user_name_message}>
                <Text style={styles._user_name}>Annel L</Text>
                <Text style={styles._user_message}>Single, Looking  ...</Text>
              </View>
            </TouchableOpacity>


            {/* >>>>>>>>>>>>> 08 <<<<<<<<<<<< */}
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}
              onPress={() => props.navigation.navigate("Message")}>
              <View style={styles._user_profile_main}>
                <View style={styles._user_image_view}>
                  <Image source={require('./../../assets/chat1.png')} style={styles._user_image} />
                </View>
              </View>
              <View style={styles._user_name_message}>
                <Text style={styles._user_name}>Annel L</Text>
                <Text style={styles._user_message}>Single, Looking  ...</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 100 }}></View>
        </ScrollView>
      </View>
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
    marginTop: 30,
    alignItems: "center",
    marginBottom: 10
  },
  _heading: {
    fontWeight: "bold",
    fontSize: 25
  },
  _serach_main: {
    flexDirection: "row",
    width: "65%",
    justifyContent: "space-between",
    // elevation: 2,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 2,
    alignItems: "center",
    borderColor:"#2DFD56",
    borderWidth:2
  },
  _serach: {
    fontWeight: "bold",
    marginLeft: 10,
    width: "84%"
  },
  _chat_main: {
    marginTop: 10
  },
  _user_profile_main: {
    width: "30%"
  },
  _user_name_message: {
    width: "70%"
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
  _user_name: {
    fontWeight: "bold"
  },
  _user_message: {
    color: "gray"
  },
  _model: {
    flex: 1,
    // marginTop: 22,
    backgroundColor: 'rgba(0,0,6,0.7)',
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    // backgroundColor: "white",
    borderRadius: 5,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 8,

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
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "MontserratSemiBold"
  },
});

export default Chat;
