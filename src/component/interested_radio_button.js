import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const IntrestedRadio = () => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View style={styles._main}>
            <View style={styles._select_gender}>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                    uncheckedColor="#00841A"
                    color="#00841A"
                />
                <Text style={styles._select_text}>Dating</Text>
            </View>
            <View style={styles._select_gender}>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                    uncheckedColor="#00841A"
                    color="#00841A"

                />
                <Text style={styles._select_text}>Friendship</Text>
            </View>
            <View style={styles._select_gender}>
                <RadioButton
                    value="third"
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('third')}
                    uncheckedColor="#00841A"
                    color="#00841A"

                />
                <Text style={styles._select_text}>Business</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    _main: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    _select_gender: {
        flexDirection: "row",
        alignItems: "center",

    },
    _select_gender2: {
        flexDirection: "row",
        alignItems: "center",
        // marginRight: 50,
    },
    _select_text: {
        color: "#000000",
        fontSize: 14
    }
})

export default IntrestedRadio;