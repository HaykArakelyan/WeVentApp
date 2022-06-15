import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, TextInput } from 'react-native';

import IconI from "react-native-vector-icons/Ionicons"

import { colors } from '../colors/colors';

function CustomInput({
    placehodler,
    style,
    iconName,
    handleIconPress,
    isPassword,
    getText,
}) {

    const renderIcon = () => {
        if (iconName) {
            return (
                <View style={styles.icon}>
                    <TouchableNativeFeedback
                        onPress={handleIconPress}
                    >
                        <IconI
                            name={iconName}
                            color={colors.lightGrey}
                            size={30}
                        />
                    </TouchableNativeFeedback>
                </View >
            )
        }
        return null;
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placehodler}
                style={[styles.input, style]}
                secureTextEntry={isPassword}
                onChangeText={(text) => getText(text)}
            />
            {renderIcon()}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 5,
    },
    input: {
        borderColor: colors.lightGrey,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        color: colors.veryLightGrey,
        fontSize: 16,
        paddingHorizontal: 15,
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 15,
    }
})

export default CustomInput;