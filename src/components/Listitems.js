import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const Listitems = (props) => {
    const { weather, main, dt }=props
    return (
      
      <View style={styles.container1}>
        <MaterialCommunityIcons name="weather-hail" size={90} color="black" style={styles.icon}/>
        <Text style={styles.weather}>{weather[0].description}</Text>
        <Text style={styles.main}>{main.temp_min} - {main.temp_max}</Text>
        <Text style={styles.dt}>{dt}</Text>
        
      </View>
    );
  }
  const styles=StyleSheet.create({
    
    container1:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'pink',
    borderBottomColor:'balck',
    borderWidth:10,
    height:150,
    marginTop:20,
    padding:6
      },
      main:{
        fontSize:15,
        margin:5
      },
      weather:{
        fontSize:15,
        margin:5
      },
      dt:{
        fontSize:15,
        margin:5
      },
    image:{
      flex:1
    }
  })
  export default Listitems;