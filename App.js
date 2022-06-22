import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './view/screens/HomeScreen';
import DetailsScreen from './view/screens/DetailsScreen';
import OnBoarding from "./view/screens/Onboarding"
import {StatusBar, View} from 'react-native';
import COLORS from './consts/colors';
import Login from './view/screens/Login';

export default function App() {
  return (
   <NavigationContainer>
    <StatusBar barStyle="black-content" backgroundColor={COLORS.white}/>
    <Stack.Navigator screenOptions={{header:()=>null}}>
      <Stack.Screen name='Onboarding' component={OnBoarding}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
