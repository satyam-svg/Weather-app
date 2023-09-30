import React from 'react';
import { Text, View, SafeAreaView, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;

  const isPortrait = () => {
    const windowDimensions = Dimensions.get('window');
    return windowDimensions.height > windowDimensions.width;
  };

  const containerStyle = isPortrait() ? styles.containerPortrait : styles.containerLandscape;

  return (
    <SafeAreaView style={containerStyle}>
      <ImageBackground
        source={require('../../assets/frankfurt-1739362_1280.jpg')}
        style={styles.image}
      >
        <Text style={styles.cityname}>{name}</Text>
        <Text style={styles.country}>{country}</Text>
        <View style={styles.iconContainer}>
          <Fontisto name="persons" size={isPortrait() ? 60 : 30} color="black" />
          <Text style={styles.population}>{`Population:${population}`}</Text>
        </View>
        <View style={styles.sunriseContainer}>
          <Feather name="sunrise" size={isPortrait() ? 90 : 45} color="white" />
          <Text style={styles.time}>{moment(sunrise).format('h:mm:ss a')}</Text>
          <Feather name="sunset" size={isPortrait() ? 90 : 45} color="white" />
          <Text style={styles.time}>{moment(sunset).format('h:mm:ss a')}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    flexDirection: 'column',
  },
  containerLandscape: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
  },
  cityname: {
    flex: 1,
    textAlign: 'center',
    fontSize: 80,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  country: {
    flex: 1,
    textAlign: 'center',
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  population: {
    fontSize: 60,
    marginLeft: 50,
  },
  sunriseContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  time: {
    fontSize: 19,
    marginLeft: 15,
    color: 'white',
  },
});

export default City;
