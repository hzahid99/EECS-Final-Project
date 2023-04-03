import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const image = {uri: 'https://reactjs.org/logo-og.png'};
//Last changed on March 12th 2023.
//replaced the buttons with pressables and included the highlighting feature as shown below
const ParkingLotsScreen = ({ navigation }) => {
  return (
    <View style = {{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <ImageBackground>
      <Text style={{ fontWeight: 'bold', fontSize: 35, paddingTop: 10, paddingBottom:0, marginTop: 50, marginBottom: 50}}> Parking Lots </Text>
      <View style={styles.button}>
        <Pressable
          style={styles.pressable}

          onPress={() =>
            navigation.navigate('XHall', {nameID: 'Wescoe'})
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >
          <Text style={styles.text}> Wescoe Hall</Text>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() =>
            navigation.navigate('Menu')
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >

          <Text style={styles.text}>  Downs Hall</Text>
        </Pressable>


        <Pressable
          style={styles.pressable}
          onPress={() =>
            navigation.navigate('Menu')
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>Allen Fieldhouse</Text>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() =>
            navigation.navigate('Menu')
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>Engel Road </Text>
        </Pressable>

      </View>
          </ImageBackground>
    
    </View>
  );
};


export default ParkingLotsScreen;

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
    marginLeft: 20,
  },

  text:
  {
    fontSize: 15,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },

});
