// This code defines a React Native screen component called XHallScreen. 
// It displays the number of available parking spaces in a parking lot, 
// which is obtained through a call to a Flask server API. 
// It also displays the restricted timings for parking in the lot.

//  Importing required modules from React and React Native libraries.
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//  Define the XHallScreen component which takes the navigation prop from React Navigation.
const XHallScreen = ({ navigation }) => {
  // Initialize availableSpaces state variable to null using the useState hook.
  const [availableSpaces, setAvailableSpaces] = useState(null);
  
  // Fetch the total number of parked cars from the Flask server when the component is mounted using the useEffect hook.
  useEffect(() => {
    fetch('http://127.0.0.1:5000/predict') // replace with your Flask server URL
      .then(response => response.json())
      .then(data => {
        const total_cars_per_level = data.total_cars_per_level; // assuming that's the key in the returned JSON object
        const availableSpaces = 256 - total_cars_per_level; // assuming total number of parking spaces is 256
        setAvailableSpaces(availableSpaces);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  // Render the UI of the component
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 39, textAlign: 'center', paddingTop: 30, paddingBottom: 20, marginTop: 20 }}> Wescoe Hall </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', paddingTop: 10, paddingBottom: 0 }}> Available Spaces </Text>

      {availableSpaces !== null ? (
        <Text style={{ fontWeight: 'bold', fontSize: 31, textAlign: 'center', backgroundColor: '#3D75C9', marginTop: 25, borderRadius: 30, marginBottom: 40, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30 }}>{availableSpaces}/256</Text>
      ) : (
        <Text>Loading...</Text>
      )}

      <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center', paddingTop: 20, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, marginTop: 80 }}> Restricted Timings:  </Text>

      <Text style={{ fontSize: 14, textAlign: 'center', paddingTop: 10, paddingBottom: 10, backgroundColor: '#3D75C9', borderRadius: 20, paddingLeft: 40, paddingRight: 40, fontStyle: 'italic' }}> Mon-Fri: 7AM-5PM  {"\n"}Gold{"\n"}Mon-Fri: 5PM-7:30PM{"\n"}Staff permit</Text>

      <Text style={{ fontSize: 14, textAlign: 'center', paddingTop: 10, paddingBottom: 10, backgroundColor: '#3D75C9', borderRadius: 20, paddingLeft: 40, paddingRight: 40, fontStyle: 'italic', marginTop: 25 }}>Enforced all year</Text>
    </View>
  );
};

export default XHallScreen;

const styles = StyleSheet.create({
  pressable:
  {
    borderRadius: 15,
    backgroundColor: '#3D75C9',
    alignItems: 'center',
    textAlign: 'center',

    height: 62,
    width: 170,
    margin: 20,
    marginLeft: 50,
  },

  text:
  {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
})
