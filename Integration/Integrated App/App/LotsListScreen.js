import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//last worked: 2/26/2023 
//added lots for red permit for sprint 9
const LotsListScreen = ({navigation}) => {
  return (
    <View 
    style = {{flex: 1, backgroundColor: 'black', }}
    >
    <Text style= {styles.text}>
    N.W. Green Hall

    </Text>

    <Text style= {styles.text}>
    N. NuneMaker Hall

    </Text>

    <Text style= {styles.text}>
    Price Computing Center
    </Text>

    <Text style= {styles.text}>
    West Memorial Drive
    </Text>

    <Text style= {styles.text}>
    East Memorial Drive
    </Text>

    <Text style= {styles.text}>
    Max Kade Center
    </Text>

    <Text style= {styles.text}>
    W. Learned Hall
    </Text>

    <Text style= {styles.text}>
     E. Carruth-O’Leary & JRP
    </Text>

    <Text style= {styles.text}>
    W. Murphy Hall
    </Text>

    <Text style= {styles.text}>
    W. Memorial Stadium
    </Text>

    <Text style= {styles.text}>
    Sunnyside & Illinois
    </Text>

    <Text style= {styles.text}>
    S. Allen Fieldhouse
    </Text>

    <Text style= {styles.text}>
    E. Burge Union
    </Text>
       
    </View>
  )

}





const styles = StyleSheet.create({
  text: {
    
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17
  },
});

export default LotsListScreen;
