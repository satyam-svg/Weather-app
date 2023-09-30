// In your Tabbar.js file
import React from 'react';
import CurrentWeather from '../Screen/Currentweather'; // Correct the import
import City from '../Screen/City';
import { Feather } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpcomingWeather from '../Screen/UpcomingWeather';
const Tab = createBottomTabNavigator();

const Tabbar = ({weather}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: 40,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name='droplet' size={34} color={focused ? 'tomato' : 'gray'} />
          ),
        }}
      >
          {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name='home' size={34} color={focused ? 'tomato' : 'gray'} />
          ),
        }}
      >
        {()=><City weatherData={weather.city}/>}
        </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabbar;
