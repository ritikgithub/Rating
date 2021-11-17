
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import RatingScreen from './src/screens/RatingScreen';

const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rating" component={RatingScreen} options={
          { title:"Ratings and Reviews" }
        } />

      </Stack.Navigator>


    </NavigationContainer>
  );
};



export default App;
