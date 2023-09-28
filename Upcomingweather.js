import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Listitems from "./src/components/Listitems";
const DATA = [
  {
    weather: [
      {
        description: "moderate rain",
        icon: "10d",
      },
    ],
    main: {
      temp_min: 297.56,
      temp_max: 300.05,
    },
    dt: 166188989592,
  },
  {
    weather: [
      {
        description: "very rain",
        icon: "10f",
      },
    ],
    main: {
      temp_min: 873.56,
      temp_max: 489.05,
    },
    dt: 1654989990592,
  },
  {
    weather: [
      {
        description: "huge rain",
        icon: "10h",
      },
    ],
    main: {
      temp_min: 879.56,
      temp_max: 490.05,
    },
    dt: 165489938490592,
  },
  {
    weather: [
      {
        description: "moderate rain",
        icon: "10d",
      },
    ],
    main: {
      temp_min: 297.56,
      temp_max: 300.05,
    },
    dt: 1661870592,
  },
  {
    weather: [
      {
        description: "very rain",
        icon: "10f",
      },
    ],
    main: {
      temp_min: 873.56,
      temp_max: 489.05,
    },
    dt: 16549290592,
  },
  {
    weather: [
      {
        description: "huge rain",
        icon: "10h",
      },
    ],
    main: {
      temp_min: 879.56,
      temp_max: 490.05,
    },
    dt: 165489980592,
  },
];

const UpcomingWeather = () => {
  const renderItems = ({ item }) => {
    return <Listitems weather={item.weather} main={item.main} dt={item.dt} />;
  };
  const { container, image, text, flatlist } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("./assets/thunderstorm-3625405_1280.jpg")}
        style={image}
      >
        <Text style={text}>Upcoming Weather</Text>
        <FlatList
          style={flatlist}
          data={DATA}
          renderItem={renderItems}
          keyExtractor={(item) => item.dt.toString()}
          // ItemSeparatorComponent={() => (
          //   <View style={{ backgroundColor: "black", height: 8 }}></View>
          // )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
    marginTop: StatusBar.currentHeight || 0,
  },
  flatlist: {
    marginTop: 20,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    color: "white",
    marginLeft: 90,
    marginTop: 90,
  },
});

export default UpcomingWeather;
