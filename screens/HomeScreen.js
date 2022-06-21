import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"

import { colors } from '../colors/colors';

import { useSelector } from 'react-redux';
import EventCard from '../components/EventCard';
import FilterBox from '../components/FilterBox';

function HomeScreen({ route }) {


    const events = useSelector((state) => state.events.events._W)

    const { login, password, name } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageContainer} >
                    <Image
                        // later when the API will be well developped,
                        // I will check if the user have an image or not.
                        // If not this will become a default image
                        source={require("../assets/images/unknownUser.jpeg")}
                        style={styles.userImage}
                    />
                    <TouchableOpacity>
                        <View style={styles.notificationSign} />
                        <IconMCI
                            name='bell-outline'
                            size={30}
                            color={colors.blackedGrey}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.userName}>
                    Hello, {name}
                </Text>
                <Text style={styles.pageTitle}>
                    Find an interesting event around you
                </Text>
            </View>
            <View style={styles.banner}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {/* {events.map((item, k) =>
                        <EventCard
                            event={item}
                            key={k}
                        />
                    )} */}
                </ScrollView>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {events.map((event, k) =>
                        <FilterBox
                            str={event.type}
                            key={k}
                        />
                    )}
                </ScrollView>
            </View>
            <View style={styles.footer}>

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },
    header: {
        paddingVertical: 20,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    userName: {
        color: colors.darkGrey,
        fontSize: 24,
        fontWeight: "700",
        paddingVertical: 10,
    },
    pageTitle: {
        fontSize: 16,
        color: colors.veryLightGrey
    },
    notificationSign: {
        position: "absolute",
        width: 10,
        height: 10,
        backgroundColor: colors.orange,
        borderRadius: 50,
        right: 3,
        top: 3,
        zIndex: 1,
    },
})

export default HomeScreen;