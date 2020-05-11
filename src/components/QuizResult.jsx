import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native"
import { Text } from "react-native-elements"
import _StyleSheet from '../../assets/styles'

import {
  View,TouchableOpacity

} from "react-native";

import { Rating, AirbnbRating } from "react-native-elements";


const QuizResult = props => {

  
  const navigation = useNavigation();
  return (

      <View  style={_StyleSheet.result}>
      <TouchableOpacity
       >
        <AirbnbRating
            count={10}
            reviews={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10"
            ]}
            defaultRating={props.score}
            size={20}
          />
      </TouchableOpacity>

      <Text h1>Game Over</Text>
      <Text h4>Correct Answer: {props.score}</Text>
      <Text h4>Incorrect Answer: {10-props.score}</Text>
      <TouchableOpacity  onPress={() => navigation.navigate("Quiz")}>
      <Text h2> Play Again </Text> 
      </TouchableOpacity>
      </View>

  );
};

export default QuizResult;

