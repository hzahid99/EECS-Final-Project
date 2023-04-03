import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import ParkingLotsScreen from './ParkingLotsScreen';
import ExploreLotsScreen from './ExploreLotsScreen';
import PermitsScreen from './Permits';
import LotsListScreen from './LotsListScreen';
import XHallScreen from './XHallScreen';
//import xyzScreen from './xyzlot';

//last updated 3/26/2023
//added final screen to show the count

const Stack = createNativeStackNavigator();// to use an API that helps us in creating screens and their navigation

const MyStack = () => { //creating a new function MyStack to start the code
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: ''}}
        />

        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{title: 'Home'}} 
        />
        
        <Stack.Screen
          name="ParkingLots"
          component={ParkingLotsScreen}
          options={{title: 'Menu'}}
        />


        <Stack.Screen
          name="ExploreLots"
          component={ExploreLotsScreen}
          options={{title: 'Menu'}}
        />

        <Stack.Screen
          name="Permits"
          component={PermitsScreen}
          options={{title: 'Menu'}}
        />

        <Stack.Screen
          name="LotsList"
          component={LotsListScreen}
          options={{title: 'Available Lots'}}
        />

        <Stack.Screen
          name="XHall"
          component={XHallScreen}
          options={{title: ''}}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;   

