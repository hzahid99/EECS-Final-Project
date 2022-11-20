import { useState} from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView } from 'react-native';
import but from '.button.js'

export default function App() {

  return (
<View
      style={styles.container}>
      <View >
        <Text
          style={styles.text}>
          Park KU //title of the page
        </Text>
      </View>

      <View >

        <Button title='Parking Lots' onPress={lotsHandler} /> //added buttons, ignore onPress for now
        <Button title='Permits' />
        <Button title='Explore Lots' />
        <Button title='Settings' />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({  //padding to the screen
  container: {
    padding: 80,
  },

  text: {   //styling the text
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 140,
    marginTop: 84,
    fontWeight: 'bold',
  },

});
 
