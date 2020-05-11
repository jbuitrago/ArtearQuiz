import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Title,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";


import { Rating, AirbnbRating } from "react-native-elements";

const QuizResult = () => {

  const { score } = useState();  
  return (
    <View >
          <AirbnbRating
            count={10}
            reviews={[
              "Terrible",
              "Bad",
              "Meh",
              "OK",
              "Good",
              "Hmm...",
              "Very Good",
              "Wow",
              "Amazing",
              "Unbelievable",
              "Jesus",
            ]}
            defaultRating={score}
            size={20}
          />
    </View>
  );
};

export default QuizResult;

