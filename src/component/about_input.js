import React from 'react';
import {  Text, View, TextInput } from 'react-native';
export default class CharacterCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <View>

                <TextInput
                    multiline={true}
                    numberOfLines={6}
                    maxLength={500}
                    placeholder='About You'
                    value={this.state.value}
                    onChangeText={(value) => this.setState({ value })}

                />


                <Text style={{  color: "gray",marginLeft:250 }}>
                    {this.state.value.length}/500
         </Text>
            </View>
        )
    }
}        