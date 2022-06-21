import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../colors/colors';

function EventCard({ event }) {
    if (!event.performers[0].image) {
        return null
    }

    return (
        <View style={styles.eventCard} >
            <View>
                <Image
                    resizeMode={"cover"}
                    source={{
                        uri: event.performers[0].image
                    }}
                    style={styles.eventImage}
                />
            </View>
            <View>
                <Text style={styles.eventTitle}>
                    {event.venue.name}
                </Text>
            </View>
            <View style={styles.eventCardPrice}>
                <Text style={styles.eventTime}>
                    10.00 - 12.00
                </Text>
                <Text style={styles.eventPrice}>
                    {event.stats.average_price
                        ? `$${event.stats.average_price}`
                        : "TBD"
                    }
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    eventCard: {
        borderColor: colors.lightGrey,
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2,
        marginHorizontal: 5,
        padding: 20,
        paddingBottom: 0,
        width: 270,// ?????
    },
    eventImage: {
        height: 170,
    },
    eventTitle: {
        color: colors.darkGrey,
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 20,
    },
    eventCardPrice: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    eventTime: {
        color: colors.veryLightGrey,
    },
    eventPrice: {
        color: colors.darkBlue,
        fontSize: 20,
        fontWeight: "700",
    }
})

export default EventCard;