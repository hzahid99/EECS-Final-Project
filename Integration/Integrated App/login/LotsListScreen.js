import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//last worked: 2/26/2023 
//added lots for red permit for sprint 9
const LotsListScreen = ({navigation}) => {
  return (
    <View style = {{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Text style={{ fontWeight: 'bold', fontSize: 35, paddingTop: 10, paddingBottom:0, marginTop: 50, marginBottom: 50}}>Availabe Lots </Text>
      <View style={styles.button}>
        <Pressable
          style={styles.pressable}
          onPress={() =>
            navigation.navigate('XHall', {nameID: 'Wescoe'})
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>Wescoe Hall</Text>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() =>
            navigation.navigate('Menu')
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >

          <Text style={styles.text}>West Memorial Drive</Text>
        </Pressable>


        <Pressable
          style={styles.pressable}
          onPress={() =>
            navigation.navigate('Menu')
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>E. Fraser Hall</Text>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() =>
            navigation.navigate('Menu')
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>E. Blake Hall</Text>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() =>
            navigation.navigate('Menu')
          }
          android_ripple={{ color: 'green' }}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>E. Kansas Union</Text>
        </Pressable>

      </View>
    
    </View>

  );
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
    marginLeft: 20,
  },

  text:
  {
    fontSize: 15,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
});

export default LotsListScreen;

  //return (
  //   <View 
  //   style = {{flex: 1, backgroundColor: 'black', }}
  //   >
  //   <Text style= {styles.text}>
  //   c

  //   </Text>

  //   <Text style= {styles.text}>
  //   N. NuneMaker Hall

  //   </Text>

  //   <Text style= {styles.text}>
  //   Price Computing Center
  //   </Text>

  //   <Text style= {styles.text}>
  //   West Memorial Drive
  //   </Text>

  //   <Text style= {styles.text}>
  //   East Memorial Drive
  //   </Text>

  //   <Text style= {styles.text}>
  //   Max Kade Center
  //   </Text>

  //   <Text style= {styles.text}>
  //   W. Learned Hall
  //   </Text>

  //   <Text style= {styles.text}>
  //    E. Carruth-O’Leary & JRP
  //   </Text>

  //   <Text style= {styles.text}>
  //   W. Murphy Hall
  //   </Text>

  //   <Text style= {styles.text}>
  //   W. Memorial Stadium
  //   </Text>

  //   <Text style= {styles.text}>
  //   Sunnyside & Illinois
  //   </Text>

  //   <Text style= {styles.text}>
  //   S. Allen Fieldhouse
  //   </Text>

  //   <Text style= {styles.text}>
  //   E. Burge Union
  //   </Text>
       
  //   </View>
  // )