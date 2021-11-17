import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Rating } from 'react-native-elements'
import SeparateRating from './SeparateRating'

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
})


const typesOfRatings = [
    { type: "lifestyle" , iconName : "home" },
    { type: "connectivity" , iconName : "bookmark" },
    { type: "safety" , iconName : "feed" },
    { type: "environment" , iconName : "coffee" }
]


const SeparateRatings = ({location}) => {
   const ratingsArray =  typesOfRatings.map(rating => {
      // console.log(location[rating.type])
        const title = rating.type[0].toUpperCase() + rating.type.slice(1)
       return <SeparateRating key={rating.type} iconName={rating.iconName}
        title={title} rating={location[rating.type]} />
    })

    return (
       <View style={style.container}>
           {ratingsArray}
       </View>
    )
}

export default SeparateRatings
