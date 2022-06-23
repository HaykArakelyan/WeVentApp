import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../colors/colors';

function FilterBox({ str, activeStyle, isActive, updateActive }) {
    return (


        <TouchableOpacity
            style={[styles.container, isActive && activeStyle]}
            onPress={() => updateActive(str)}
        >
            <Text>{str.replace(/_/g, " ")}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkWhite,
        borderRadius: 5,
        margin: 5,
        padding: 10,
    },
})

export default FilterBox;