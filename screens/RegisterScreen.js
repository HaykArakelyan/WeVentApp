import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function RegisterScreen({ }) {
    return (
        <View style={styles.container}>
            <Text>
                RegisterScreen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default RegisterScreen;