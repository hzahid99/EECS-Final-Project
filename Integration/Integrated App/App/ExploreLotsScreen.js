import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, boolean, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import ImageViewer which will help us to zoom Image
import ImageViewer from 'react-native-image-zoom-viewer';
import { Linking } from 'react-native';

//last worked: 2/26/2023 
//added link to buy a permit for sprint 9
const ExploreLotsScreen = ({navigation}) => {
  const images = [
    {
      url:
        'https://i.imgur.com/QyMzrRT.png',
    },

    {
      url:
        'https://www.linkpicture.com/q/parking-map.png',
    },
  ];

  return (
    <View style = {{flex: 1, justifyContent: 'space-evenly', height: 500}}>
      <Button
        title="Back to Menu"
        onPress={() =>
          navigation.navigate('Menu')
        }
      />
      <TouchableOpacity onPress={() => Linking.openURL('https://parking.ku.edu/permit-information')}>
  <Text style={{ color: 'gold', backgroundColor: 'black', fontSize: 25, textAlign: 'center'}}>
    Buy a Permit now
  </Text>
</TouchableOpacity>

  
       <View style={{flex: 1}}>
        <ImageViewer
          imageUrls={images}
          renderIndicator={() => null}
        />
      </View>
    

    

      

      
      
      
    </View>
  );
};
/*const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};*/

export default ExploreLotsScreen;   
  
//<Image style = {{width: 365, height: 250}} source={require('./parkingindex.png')} />
//<ImageViewer imageUrls={'https://imgur.com/a/pf691sm'} renderIndicator={() => null} />
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
