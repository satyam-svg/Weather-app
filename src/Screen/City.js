import React from 'react';
import { Text, View, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/frankfurt-1739362_1280.jpg')}
        style={styles.image}
      >
        <Text style={styles.cityname}>London</Text>
        <Text style={styles.country}>UK</Text>
        <View style={styles.iconContainer}>
          <Fontisto name="persons" size={60} color="black" />
          <Text style={styles.population}>8000</Text>
        </View>
        <View style={styles.s}>
        <Feather style={styles.sunrise}name="sunrise" size={90} color="white" />
        <Text style={styles.time}>10:46:58am</Text>
        <Feather style={styles.sunrise}name="sunset" size={90} color="white" />
        <Text style={styles.time}>10:46:58am</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  cityname: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 80,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  country: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  population:{
    fontSize:60,
    marginLeft:50,
  },
  sunrise:{
    marginTop:30,
    marginLeft:15,
  },
  s:{
     flex:1,
     flexDirection:'row'
  },
  time:{
    fontSize:19,
    position: 'relative',
    top:45,
    color: 'white'
  }
});

export default City;
