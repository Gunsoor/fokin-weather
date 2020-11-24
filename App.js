import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native";
import Loading from "./Lodaing";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";


const API_KEY = "bbbba1a0ee492e981701dbf80081cd3e";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { data: {main : {temp}, weather} } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${Math.round(latitude)}&lon=${Math.round(longitude)}&appid=${API_KEY}&units=metric`
      );
      console.log("***")
      console.log(temp)
      console.log(weather)
      this.setState({
        isLoading:false,
        temp,
        condition: weather[0].main
      })
  }

  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response)
      const {coords : { latitude, longitude }} = await Location.getCurrentPositionAsync();
      console.log("위도 경도 : " + latitude, longitude);

      await this.getWeather(latitude, longitude)
      
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
    const { isLoading, temp, condition } = this.state;
    /*console.log("---------------------")
    console.log(this.state)
    console.log(temp) 
    console.log(isLoading)
    console.log(condition) */
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

