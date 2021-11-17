import React from 'react'
import { Button, Text, View } from 'react-native'
import { Rating } from 'react-native-elements'
import IndividualRating from '../components/IndividualRating'



const RatingScreen = ({ navigation, route }) => {
    const location = route.params.location;
    const numbers = ["fiver", "fourr", "threer", "twor", "oner"]
   // console.log(location)
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 40 }}>Overall Rating</Text>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10, marginVertical: 20 }}>
                    <Text style={{ fontSize: 30 }}>{`${location.rating}/5`}</Text>
                    <Rating style={{ padding: 0 }} readonly imageSize={25} startingValue={location.rating} />
                    <Text style={{ fontSize: 20 }}>Average Rating</Text>
                    <Text style={{ fontSize: 15 }}>{`${location.totalRev} total reviews`}</Text>
                </View>
                <View style={{ flexGrow: 1 }}>
                {
                numbers.map(number => {
                    //console.log(location[number])
                        return  <IndividualRating type={number} percentage={location[number]} />
                }
                   
                )
                }
                </View>



            </View>
            <View style={{ marginTop: 20 }}>
                <Button color={"blue"} title="Review Your Society and Locality" />
            </View>
        </View>
    )
}

export default RatingScreen
