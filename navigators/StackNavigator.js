import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import Dashboard from "../screens/Dashboard";
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
                    ? "Dashboard"
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
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
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