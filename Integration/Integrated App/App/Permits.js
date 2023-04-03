import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const PermitsScreen = ({navigation}) => {
  return (
    <View>
      <Text style = {{fontWeight: 'bold', fontSize: 35, textAlign: 'center', paddingTop: 50}}> PERMITS </Text>

      <View style = {styles.button}>
        <Pressable 
        style = {[styles.pressable, {backgroundColor: "red"}]} 
          onPress = {() => navigation.navigate('LotsList')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'LotsList'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Red
          </Text>
              
        </Pressable>

        <Pressable 
      style = {[styles.pressable, {backgroundColor: "yellow"}]} 
          onPress = {() => navigation.navigate('LotsList')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'green'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Yellow
          </Text>
              
        </Pressable>

        <Pressable 
      style = {[styles.pressable, {backgroundColor: "blue"}]} 
          onPress = {() => navigation.navigate('LotsList')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'green'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Blue
          </Text>
              
        </Pressable>

        <Pressable 
      style = {[styles.pressable, {backgroundColor: "brown"}]} 
          onPress = {() => navigation.navigate('LotsList')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'green'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Brown
          </Text>
              
        </Pressable>

        <Pressable 
      style = {[styles.pressable, {backgroundColor: 'green'}]} 
          onPress = {() => navigation.navigate('LotsList')} 
          //onPressIn = {fontSize: 25 }
          android_ripple = {{color: 'green'}}
          activeOpacity = {0.5}
        >
          <Text style = {styles.text}>
            Green
          </Text>
              
        </Pressable>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  button: {
    //backgroundColor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 500
  },
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
})
/*const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};*/

export default PermitsScreen;   

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
