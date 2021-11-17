import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ProgressCircle from 'react-native-progress-circle'

const style = StyleSheet.create({
    container: {
        padding: 7
    }
})

const SeparateRating = ({title,rating, iconName}) => {
    return (
        <View style={style.container}>
          <ProgressCircle
            percent={rating}
            radius={35}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <FontAwesome size={32}  name={iconName} />
        </ProgressCircle>
          
            <Text style={{fontSize: 15, textAlign:'center'}}>{title}</Text>
            <Text style={{fontSize: 15, textAlign:'center'}}>{`${rating/100*5}/5`}</Text>
        </View>
    )
}

export default SeparateRating
