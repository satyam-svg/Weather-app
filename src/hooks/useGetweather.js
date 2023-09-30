import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { TEST_KEY } from '@env';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const fetchWeather = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${TEST_KEY}&units=metric`);
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      setError('Cannot fetch weather');
    }
  };
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        setLoading(false);
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        console.log(location.coords.latitude)
        setLat(location.coords.latitude)
      setLon(location.coords.longitude)
        await fetchWeather();

        setLoading(false);
      } catch (error) {
        setError('Error getting location data');
        setLoading(false);
      }
    })();
  }, [lat,lon]);

  return {loading, error, weather }; // Return as an object
};
