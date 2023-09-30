import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import Tab from './src/components/Tabbar';
import { useGetWeather} from './src/hooks/useGetweather'; // Correct the import path
import ErrorItems from './src/components/Erroritems';
AppRegistry.registerComponent('Weatherapp', () => App); 
const App = () => {
  const { loading, error, weather } = useGetWeather();
  
   // Destructure the values correctly
  // Check for errors first
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  // Check if weather data is available
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tab weather={weather} />
      </NavigationContainer>
    );
  }

  // If none of the conditions above are met, display a loading indicator
  return (
    <View style={styles.container}>
      {loading?<ActivityIndicator size="large" />:<ErrorItems/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
