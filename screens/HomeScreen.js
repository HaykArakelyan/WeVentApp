import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"
import IconE from "react-native-vector-icons/Entypo"

import { colors } from '../colors/colors';

import EventCard from '../components/EventCard';
import FilterBox from '../components/FilterBox';

import { useGetEventsQuery } from '../store/events';
import { useGetTopEventQuery } from '../store/topEvent';


function HomeScreen({ route }) {

    const getFilters = () => {
        const array = ["All"];
        for (let i = 0; i < events.length; i++) {
            if (!array.find((item) => item === events[i].type)) {
                array.push(events[i].type);
            }
        }
        return array;
    }

    const { data = [] } = useGetEventsQuery();

    const events = data;

    const filters = getFilters()
    const [activeFilter, setActiveFilter] = useState(filters[0])

    const { data: topEvent = [] } = useGetTopEventQuery();

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

                    {events && events.map((item, k) =>
                        <EventCard
                            event={item}
                            key={k}
                        />
                    )}
                </ScrollView>
                <View style={styles.filters}>
                    <Text style={styles.filtersLeft}>
                        Nearby Event
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.filtersRight}>
                            View All
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {filters && filters.map((filter, k) =>
                        <FilterBox
                            key={k}
                            str={filter}
                            activeStyle={styles.activeStyle}
                            isActive={activeFilter === filter}
                            updateActive={setActiveFilter}
                        />
                    )}
                </ScrollView>
            </View>

            <View style={styles.footer}>
                {topEvent[0] &&
                    <TouchableOpacity style={styles.topEventContainer} >
                        <View style={styles.topEventTopPart}>
                            <Image
                                source={{ uri: topEvent[0].performers[0].image }}
                                style={styles.topEventImage}
                            />
                            <View style={styles.topEventRight}>
                                <View>
                                    <Text style={styles.topEventDate}>
                                        Today
                                        <IconE
                                            name={"dot-single"}
                                            size={20}
                                        />
                                        10.00 - 12.00
                                    </Text>
                                    <Text style={styles.topEventTitle}>
                                        {topEvent[0].venue.name}
                                    </Text>
                                </View>
                                <View style={styles.topEventBottomPart}>
                                    <Text style={styles.topEventLocation}>
                                        {topEvent[0].venue.display_location}
                                    </Text>
                                    <Text style={styles.topEventPrice}>
                                        ${topEvent[0].stats.average_price}
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    activeStyle: {
        backgroundColor: colors.orange,
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        paddingVertical: 20,
    },
    imageContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userImage: {
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    userName: {
        color: colors.darkGrey,
        fontSize: 24,
        fontWeight: "700",
        paddingVertical: 10,
    },
    pageTitle: {
        color: colors.veryLightGrey,
        fontSize: 16,
    },
    notificationSign: {
        backgroundColor: colors.orange,
        borderRadius: 50,
        height: 10,
        position: "absolute",
        right: 3,
        top: 3,
        width: 10,
        zIndex: 1,
    },
    filters: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    filtersLeft: {
        color: colors.darkGrey,
        fontSize: 18,
        fontWeight: "600",
    },
    filtersRight: {
        color: colors.darkBlue,
        fontSize: 16,
        fontWeight: "500",
    },
    topEventContainer: {
        borderColor: colors.darkWhite,
        borderRadius: 5,
        borderStyle: "solid",
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
    },
    topEventTopPart: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topEventImage: {
        borderRadius: 10,
        height: 64,
        width: 64,
    },
    topEventRight: {
        paddingRight: 40,
    },
    topEventDate: {
        color: colors.veryLightGrey,
        paddingBottom: 10,
    },
    topEventTitle: {
        color: colors.black,
        fontWeight: "600",
        paddingVertical: 10,
    },
    topEventBottomPart: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topEventLocation: {
        color: colors.veryLightGrey,
    },
    topEventPrice: {
        color: colors.darkBlue,
        fontSize: 20,
        fontWeight: "700",
    }
})

export default HomeScreen;