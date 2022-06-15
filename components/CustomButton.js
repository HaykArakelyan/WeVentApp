import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function CustomButton({ style, title, handleButtonPress }) {
    return (
        <TouchableOpacity
            onPress={handleButtonPress}
        >
            <Text style={[styles.title, style]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "600",
        paddingVertical: 10,
        textAlign: "center",
    }
})

export default CustomButton;