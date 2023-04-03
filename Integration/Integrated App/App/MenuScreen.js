//import * as React from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const MenuScreen = ({navigation}) => {
  return (
    
  <View style = {{flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'white'}}>
    <Text style = {{fontWeight: 'bold', fontSize: 45, textAlign: 'center' }}> PARKKU </Text>

    <View>
      <Pressable 
      style = {styles.pressable} 
          onPress = {() => navigation.navigate('ParkingLots')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'green'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Parking Lots
          </Text>
              
        </Pressable>

        <Pressable 
          style = {styles.pressable} 
          onPress = {() => navigation.navigate('Permits')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'green'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Permits
          </Text>
              
        </Pressable>

        <Pressable 
          style = {styles.pressable} 
          onPress = {() => navigation.navigate('ExploreLots')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'green'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Explore Lots
          </Text>
              
        </Pressable>

        <Pressable 
          style = {styles.pressable} 
          onPress = {() => navigation.navigate('Menu')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'green'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Settings
          </Text>
              
        </Pressable>

    </View>
  </View>
    //</View>
  )
};

const styles = StyleSheet.create({
  pressable:
  {
    borderRadius: 15,
    backgroundColor: '#3D75C9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    width: 170,
    margin: 20,   
  },

  text: 
  {
    fontSize: 15,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },

});

export default MenuScreen; 
  

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    return <Text>This is {route.params.name}'s profile</Text>;
    const MenuScreen = ({navigation, route}) => {
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});*/
