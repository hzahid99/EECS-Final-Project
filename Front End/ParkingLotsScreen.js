import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const ParkingLotsScreen = ({navigation}) => {
  return (
    <View>
      <Text style = {{fontWeight: 'bold', fontSize: 35, textAlign: 'center', paddingTop: 50}}> PARKING LOTS </Text>
      <View style = {styles.button}>
        <Button
          title="Wescoe Hall"
          onPress={() =>
            navigation.navigate('Menu')
          }
        />

        <Button
          title="Summerfield Hall"
          onPress={() =>
            navigation.navigate('Menu')
          }
        />

        <Button
          title="Downs Hall"
          onPress={() =>
            navigation.navigate('Menu')
          }
        />

        <Button
          title="Allen Fieldhouse"
          onPress={() =>
            navigation.navigate('Menu')
          }
        />

        <Button
          title="Engel Rd Hall"
          onPress={() =>
            navigation.navigate('Menu')
          }
        />

        <Button
          title="Back to Menu"
          onPress={() =>
            navigation.navigate('Menu')
          }
        />
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
  }
  
})
/*const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};*/

export default ParkingLotsScreen;   

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
