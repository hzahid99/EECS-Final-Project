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
          Permits     //Title of the page
        </Text>
      </View>

      <View >

        <Button title='Red' style = {styles.red} /> //Buttons w their colors 
        <Button title='Yellow' color="#d9d648s"  />
        <Button title='Blue' color="#2a4396"  />
        <Button title='Brown' color="brown"  />
        <Button title='Gold'color="gold"  />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({  //Style the whole page w padding
  container: {
    padding: 80,
  },

  buttons: {  //add margins to the buttons
    marginBottom: 30,
    fontSize: 1,

  },

  text: { //Style the text
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 140,
    marginTop: 84,
    fontWeight: 'bold',
  },

  red: {

  }


});
 
