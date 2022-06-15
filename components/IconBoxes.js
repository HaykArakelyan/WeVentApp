import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import IconAD from "react-native-vector-icons/AntDesign"
import { colors } from '../colors/colors';

function IconBoxes({
    title,
    handleIconPress,
    iconColor = colors.darkGrey
}) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleIconPress}
        >
            <IconAD
                name={title}
                size={30}
                color={iconColor}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: colors.lightGrey,
        borderRadius: 10,
        borderStyle: "solid",
        borderStyle: "solid",
        borderWidth: 1,
        padding: 10,
    },
})

export default IconBoxes;