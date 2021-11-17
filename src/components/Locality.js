import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import { Rating } from 'react-native-elements'

import LocalityCockpit from './LocalityCockpit'
import SeparateRatings from './SeparateRatings'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 2,
        marginTop: 2,
        width: Dimensions.get("screen").width
    },
    subcontainer: {
        borderWidth: 1,
        borderLeftWidth: 5,
        borderLeftColor: 'green',
        padding: 10,
        marginTop: 10
    }
})

const Locality = ({ locations, navigation }) => {
    const navigateToRatingScreen = (location) => {
        navigation.navigate("Rating", {
            location : location
        })
    }
    return (
        <ScrollView horizontal>
            {
                locations.map(location => (
                    <TouchableWithoutFeedback onPress={()=> navigateToRatingScreen(location)}>
                    <View style={styles.container}>
                        <LocalityCockpit location={location} />
                        <SeparateRatings location={location} />
                        <View style={styles.subcontainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', backgroundColor: 'green', alignItems: 'center', borderRadius: 8, paddingHorizontal: 5 }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>{location.rating}</Text>
                                    <Icon name="star" color="white" size={17}></Icon>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15 }}>Most Helpnlful sd Review</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ marginTop: 5 }} numberOfLines={1}>Sectoddr dhs9879 is a well planned Societydskfbkdsdnflsdlkfn sanlfdks s sdnfk</Text>
                            </View>
                            <View>
                                <Text numberOfLines={1}>Sumit Agardjamsd sdjfnsjdfbs fdsjkbnfkj</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                ))
            }

        </ScrollView>

    )
}

export default Locality
