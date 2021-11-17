import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, Touchable, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import Locality from '../components/Locality'


const locality = {
    place: "Noida Extension",
    img: "https://img.staticmb.com/mbimages/project/Photo_h300_w450/2019/06/28/Project-Photo-25-ATS-Rhapsody-Greater-Noida-5096739_345_1366_300_450.jpg",
    total_rating: 4.5,
    no_of_reviews: 6,
    ratings: {
        lifestyle: {
            title: "LifeStyle",
            rating: 4.125,
            iconName: "home"

        },
        connectivity: {
            title: "Connectivity",
            rating: 4,
            iconName: "bookmark"
        },
        safety: {
            title: "Safety",
            rating: 5,
            iconName: "feed"
        },
        environment: {
            title: "Environment",
            rating: 4.125,
            iconName: "coffee"
        }
    }
}

const styles = StyleSheet.create({
    upperView: {
        padding: 20,
        borderBottomWidth: 1
    }
})

const HomeScreen = ({ navigation }) => {

    const [locations, setlocations] = useState([])
    const [loading, setloading] = useState(true)
   // console.log("[HomeScreen.js]")
    useEffect (()=> {
       async function fetchData(){
            const response = await fetch("https://run.mocky.io/v3/bef66934-d292-4191-bbbc-beb73fca1a66");
            const json =  await response.json()
            setlocations(json)
            setloading(false)
        }
        fetchData()
    },[])


    return (
      
            <ScrollView>
                
                <View style={styles.upperView}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Top Rated Localities </Text>
                    <Text style={{ fontSize: 20 }}>In Delhi WWest </Text>
                </View>
                <View>
                   {
                     
                        loading? <ActivityIndicator size='large' /> :   <Locality locations={locations} navigation={navigation} />
                    }
                </View>
                
                <Button title="Rating" onPress={()=> navigation.navigate('Rating')}></Button>
            </ScrollView>
        
    )
}

export default HomeScreen
