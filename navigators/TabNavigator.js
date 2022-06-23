import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import IconAD from "react-native-vector-icons/AntDesign";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from "../screens/SearchScreen";
import MyEventScreen from "../screens/MyEventScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from '../colors/colors';

import { StyleSheet } from "react-native";

function TabNavigator({ }) {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: styles.tabBarLable,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarActiveTintColor: colors.orange,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused }) =>
                        <IconAD
                            name='home'
                            size={30}
                            color={
                                focused
                                    ? colors.orange
                                    : colors.veryLightGrey
                            }
                        />

                }}
            />
            <Tab.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    tabBarActiveTintColor: colors.orange,
                    tabBarLabel: "Search",
                    tabBarIcon: ({ focused }) =>
                        <IconAD
                            name='search1'
                            size={30}
                            color={
                                focused
                                    ? colors.orange
                                    : colors.veryLightGrey
                            }
                        />

                }}

            />
            <Tab.Screen
                name='MyEventScreen'
                component={MyEventScreen}
                options={{
                    tabBarActiveTintColor: colors.orange,
                    tabBarLabel: "My Event",
                    tabBarIcon: ({ focused }) =>
                        <IconMCI
                            name='ticket-confirmation-outline'
                            size={30}
                            color={
                                focused
                                    ? colors.orange
                                    : colors.veryLightGrey
                            }
                        />

                }}
            />
            <Tab.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    tabBarActiveTintColor: colors.orange,
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ focused }) =>
                        <IconAD
                            name='user'
                            size={30}
                            color={
                                focused
                                    ? colors.orange
                                    : colors.veryLightGrey
                            }
                        />

                }}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabBar: {
        paddingVertical: 5,
    },
    tabBarLabel: {
        fontSize: 12,
    },
})

export default TabNavigator;