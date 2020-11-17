import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native";
import Loading from "./Lodaing";
import * as Location from 'expo-location';
import axios from "axios";


const API_KEY = "bbbba1a0ee492e981701dbf80081cd3e";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );

      console.log(data);
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : { latitude, longitude }} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      console.log(latitude, longitude);
      //Send to API and Get Weather
      this.setState({isLoading: false});
    } catch {
      Alert.alert("Can't find you.", "So sad..")
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){ 
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

