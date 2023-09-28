import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const Currentweather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
      <MaterialCommunityIcons name="weather-hail" size={24} color="black" style={styles.icon}/>
        <Text style={styles.upper}>6</Text>
        <Text style={styles.temp}>Feels Like 5</Text>
        <Text style={styles.temp}>High:8 Low:6</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.desc}>It's Sunny Weather</Text>
        <Text style={styles.desc1}>It's Perfect t-shirt Weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'pink',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  upper:{
    fontSize:80,
    margin:3,
    padding:2
  },
  temp:{
    fontSize:50,
    margin:1,
  },
  desc:{
    fontSize:40,
  },
  desc1:{
    fontSize:50,
  },
  icon:{
    fontSize:190
  },
  body:{
    justifyContent: 'flex-end',
    alignItems:'flex-start',
    margin:10
  }
});

export default Currentweather;
