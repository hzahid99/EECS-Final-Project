import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const image = {uri: 'https://reactjs.org/logo-og.png'};
//Last changed on March 12th 2023.
//replaced the buttons with pressables and included the highlighting feature as shown below
const XHallScreen = ({ navigation }) => {
  return (

    <View style = {{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
     
      <Text style={{ fontWeight: 'bold', fontSize: 39, textAlign: 'center', paddingTop: 30, paddingBottom: 20, marginTop: 20}}> Wescoe Hall </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', paddingTop: 10, paddingBottom: 0 }}> Available Spaces </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 31, textAlign: 'center', backgroundColor: '#3D75C9', marginTop: 25, borderRadius: 30, marginBottom: 40, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30 }}> 64/256 </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center', paddingTop: 20, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, marginTop: 80}}> Restricted Timings:  </Text>

      <Text style={{  fontSize: 14, textAlign: 'center', paddingTop: 10, paddingBottom: 10, backgroundColor: '#3D75C9', borderRadius: 20, paddingLeft: 40, paddingRight: 40, fontStyle: 'italic' }}> Mon-Fri: 7AM-5PM  {"\n"}Gold{"\n"}Mon-Fri: 5PM-7:30PM{"\n"}Staff permit</Text>



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

});
