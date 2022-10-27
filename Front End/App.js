import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View
      style={styles.container}>
      <View >
        <Text
          style={styles.text}>
          Park KU
        </Text>
      </View>
      <View >
        <view
          style={styles.a}>
          <Button title='Parking Lots' />
        </view>

        <Button title='Permits' />
        <Button title='Explore Lots' />
        <Button title='Settings' />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 80,
  },

  a: {
    margin: 20,
  },

  buttons: {
    marginBottom: 30,
    fontSize: 1,

  },

  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 76,
    marginTop: 84,
    fontWeight: 'bold',
  }
});
