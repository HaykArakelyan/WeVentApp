import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../colors/colors';

function FilterBox({ str }) {

    console.log(str == "");
    // const temp = str.replaceAll("_", " ");

    return (
        <View style={styles.container}>
            <Text>{str.replace(/_/g, " ")}</Text>
            {/* <Text>{str}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.darkWhite,
        margin: 5,
        borderRadius: 5
    },
})

export default FilterBox;