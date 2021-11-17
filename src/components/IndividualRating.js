import React from 'react'
import { Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'

const IndividualRating = ({type, percentage}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
       <View style={{borderWidth: 2, height: 25, borderRadius: 10, margin: 10, flexGrow: 1}}>
           <View style={{height: '100%', width: `${percentage}%`,backgroundColor: "blue"}}>

           </View>
       </View>
       <Text style={{fontSize: 20, fontWeight:"bold"}}>{type}</Text>
       <Icon name="star" size={30} style={{margin: 10}}/>
       </View>
    )
}

export default IndividualRating
