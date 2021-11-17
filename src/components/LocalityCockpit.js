import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { Rating } from 'react-native-elements'

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row'
    }
})

const IMG = "https://img.staticmb.com/mbimages/project/Photo_h300_w450/2019/06/28/Project-Photo-25-ATS-Rhapsody-Greater-Noida-5096739_345_1366_300_450.jpg";

const LocalityCockpit = ({location}) => {
    return (
        <View style={styles.container}>
            <View style={{borderRadius: 50, overflow: "hidden"}}>
            <Image source={{ uri: IMG }} style={{width: 100, height: 100}}/>
            </View>
            <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 20}}>{location.place}</Text>
                <Text>
                   <Rating imageSize={25} readonly startingValue={location.rating}  />;
                </Text>
                <Text style={{fontSize: 15}}>{`${location.rating}/5`}</Text>
                <Text>{`Based on ${location.totalRev} reviews`}</Text>
            </View>
        </View>
    )
}

export default LocalityCockpit
