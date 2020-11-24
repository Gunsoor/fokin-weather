import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName : "weather-hail",
    gradient : ["#4da0b0", "#d39d38"],
    title : "Haze",
    subtitle: "Just don't go outside."
  },
  Thunderstorm : {
    iconName : "weather-lightning-rainy",
    gradient : ["#373b44", "#4286f4"],
    title : "Thunderstorm",
    subtitle: "Just don't go outside. It's very dangerous."
  },
  Drizzle : {
    iconName : "weather-rainy",
    gradient : ["#4da0b0", "#d39d38"],
    title : "Drizzle",
    subtitle: "I like rain sounds. Today is the day I want to eat Kimchi pancake."
  },
  Rain : {
    iconName : "weather-pouring",
    gradient : ["#4da0b0", "#d39d38"],
    title : "Rain",
    subtitle: "Just don't go outside."
  },
  Snow : {
    iconName : "weather-snowy-heavy",
    gradient : ["#4da0b0", "#d39d38"],
    title : "Snow",
    subtitle: "Just don't go outside."
  },
  Atmosphere : {
    iconName : "weather-hail",
    gradient : ["#4da0b0", "#d39d38"],
    title : "Atmosphere",
    subtitle: "Just don't go outside."
  },
  Clear : {
    iconName : "weather-sunny",
    gradient : ["#ff7300", "#fef253"],
    title : "Clear",
    subtitle: "Just don't go outside."
  }, 
  Clouds : {
    iconName : "weather-cloudy",
    gradient : ["#4da0b0", "#d39d38"],
    title : "Clouds",
    subtitle: "Just don't go outside."
  },
  Dust : {
    iconName : "weather-hail",
    gradient : ["#4da0b0", "#d39d38"],
    title : "Dust",
    subtitle: "Just don't go outside."
  },
  Mist : {
    iconName : "weather-fog",
    gradient : ["#4da0b0", "#d39d38"],
    title : "Mist",
    subtitle: "Fuckking Weather! I hate Mist"
  }

}

export default function Weather({temp, condition}){
  console.log("########WEATHER#########")
  console.log(temp)
  console.log(condition)  
  return ( 
    <LinearGradient style = {styles.container}
    colors={weatherOptions[condition].gradient}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style = {styles.halfContainer}>
        <MaterialCommunityIcons 
          name={weatherOptions[condition].iconName}
          size={96} 
          color="white" />
        <Text style = {styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.textContainer, ...styles.halfContainer}}>
        <View>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear", 
    "Clouds",
    "Haze",
    "Dust",
    "Mist"
  ]).isRequired, 
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  temp : {
    fontSize : 42,
    color : "white"
  },
  halfContainer: {
    flex:1,
    justifyContent :"center",
    alignItems : "center"
  },
  title : {
    fontSize : 44,
    color : "white",
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color : "white",
    fontSize : 22
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems:"flex-start"
  }

})