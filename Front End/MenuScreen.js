//import * as React from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const MenuScreen = ({navigation}) => {
  return (
  <View style = {{flex: 1}}>
    <Text style = {{fontWeight: 'bold', fontSize: 35, textAlign: 'center', paddingTop: 50}}> PARK KU </Text>
    <View style = {styles.button}>
      <Button
            title="Parking Lots"
            onPress={() =>
              navigation.navigate('ParkingLots')
            }
          />
      <Button
            title="Permits"
            //style = {{flex: 2 }}
            onPress={() =>
              navigation.navigate('Permits')
            }
          />
      <Button
            title="Explore Lots"
            //style = {{flex: 1}}
            onPress={() =>
              navigation.navigate('ExploreLots')
            }
          />
        <Button
            title="Settings"
            //style = {{flex: 1}}
            onPress={() =>
              navigation.navigate('Menu')
            }
          />
    </View>
  </View>
  )
};

const styles = StyleSheet.create({
  button: {
    //backgroundColor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 500
  }
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
