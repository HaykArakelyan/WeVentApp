import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

import React from "react";

import { useSelector } from "react-redux";


function StackNavigator() {

    const { isSkipped } = useSelector((state) => state.isSkipped)

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName={
                isSkipped
                    ? "HomeScreen"
                    : "LoginScreen"
            }
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;