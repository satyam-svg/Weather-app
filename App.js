import React from 'react';
import { View, StyleSheet } from 'react-native';
// import CurrentWeather from './src/components/Currentweather';
// import Upcomingweather from './Upcomingweather';
import City from './src/Screen/City';
const App = () => {
  return (
    <View style={styles.container1}>
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
});

export default App;
