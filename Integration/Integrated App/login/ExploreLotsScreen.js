import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, boolean, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import ImageViewer which will help us to zoom Image
import ImageViewer from 'react-native-image-zoom-viewer';
import { Linking } from 'react-native';

//last worked: 2/26/2023 
//added link to buy a permit for sprint 9
const ExploreLotsScreen = ({ navigation }) => {
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
    <View style={{ flex: 1, justifyContent: 'space-evenly', height: 500, backgroundColor: 'black' }}>

      <View style={{ flex: 1 }}>
        <ImageViewer
          imageUrls={images}
          renderIndicator={() => null}
        />
      </View>

      <TouchableOpacity  onPress={() => Linking.openURL('https://parking.ku.edu/permit-information')}>
        <Text style={{ color: 'white', backgroundColor: '#3D75C9', fontSize: 20, textAlign: 'center', marginBottom: 70, borderRadius: 20}}>
          Buy permit
        </Text>
      </TouchableOpacity>

    </View>
  );
};
/*const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};*/

export default ExploreLotsScreen;
