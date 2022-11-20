// Name: Huzaifa Zahid
// Date Created: 11/16/22
// Last Editied: 11/17/22
// Description: This screen shows a condensed list of all the parking lots and will show the permits that will give access to them. The list needs to be updated.

import React, {useState} from 'react'
import {
  SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity
} from 'react-native'

const App = () => {
  let listViewRef;
  const [dataSource, setdataSource] = useState([
    {id: 1, title: 'Lot 1'},
    {id: 1, title: 'Lot 2'},
    {id: 1, title: 'Lot 3'},
    {id: 1, title: 'Lot 4'},
    {id: 1, title: 'Lot 5'},
    {id: 1, title: 'Lot 6'},
    {id: 1, title: 'Lot 7'},
    {id: 1, title: 'Lot 8'},
    {id: 1, title: 'Lot 9'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 1, title: 'Item 1'},
    {id: 99, title: 'Item 1'}
  ]);

  const ItemView = ({item}) => {
    return (
      <Text style={styles.itemStyle}>
        {item.id} {'. '} {item.title.toUpperCase()}   //Format for the lists, e.g. 1. Lot A
      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View style={styles.separator}/>
    )
  }

  const TopButtonHandler = () => {  //This button will directly take to the top of the screen
    listViewRef.scrollToOffset({offset: 0, animated: true});
  }

  const EndButtonHandler = () => {    //This button will directly take to the bottom of the screen
    listViewRef.scrollToEnd({animated: true});
  }

  return (
    <SafeAreaView style={{flex: 1}}>
    <FlatList
      data={dataSource}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparatorView}
      renderItem={ItemView}
      ref={(ref) => {
        listViewRef = ref;
      }}
    />

    <TouchableOpacity
      style={[styles.buttonStyle, {right: 30, top: 70}]}
      onPress={EndButtonHandler}
    >
      <Text style={styles.text}> Go End </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.buttonStyle, {right: 30, bottom: 70}]}
      onPress={TopButtonHandler}
    >
      <Text style={styles.text}> Go Top </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({    //CSS type styling for the buttons on the screen
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#c8c8c8'
  },
  itemStyle: {
    padding: 30,
    fontSize: 20
  },

  buttonStyle: {    //The top and bottom buttons
    position: 'absolute',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },

    text: {
      fontSize: 20
    }
});

export default App;
