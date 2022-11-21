//import { StatusBar } from 'expo-status-bar';<StatusBar style="auto" />
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 31}}>Parking Lots</Text>
      <Button title='Wescoe Hall' />
      <Button title='Summerfield hall' />
      <Button title='Downs Hall' />
      <Button title='Allen Fieldhouse' />
      <Button title='Engel RD' />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
