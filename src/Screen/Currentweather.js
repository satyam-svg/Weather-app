import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { weatherType } from '../utilities/Weathertype';
const Currentweather = ({weatherData}) => {
  console.log(weatherData)
  const {
    main:{temp,feels_like,temp_max,temp_min},weather
  }=weatherData
  const weatherCondition=weather[0].main
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
      <MaterialCommunityIcons name="weather-hail" size={24} color="black" style={styles.icon}/>
        
        <Text style={styles.temp}>{`Feels Like ${feels_like}`}</Text>
      <Text style={styles.temp}>{`High:${temp_max} Low:${temp_min}`}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.desc1}>{weather[0].description}</Text>
        <Text style={styles.desc}>{weatherType[weatherCondition].message}.</Text>
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
