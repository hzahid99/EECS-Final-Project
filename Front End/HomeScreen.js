import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const HomeScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Menu');}, 5000);
  return (
    <View style = {{flex:1}}>
      <View style = {styles.viewContainer}>
        
      </View>
      <View style = {{flex: 1, alignItems: 'center',}}>
        <Image source={require('./jayhawk.jpeg')} />
        <Text style = {{fontWeight: 'bold', fontSize: 35, textAlign: 'center', paddingTop: 25}}> PARK KU </Text>
        <Text style = {{fontWeight: 'italic', fontSize: 19, textAlign: 'center', paddingTop: 25}}> Loading... </Text>
      </View>
    </View>
  );
};


/*const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
  navigation.navigate('Menu', {name: 'Jane'})
};*/

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'purple',
    flex: 1
  }
})
  
export default HomeScreen; 


/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
