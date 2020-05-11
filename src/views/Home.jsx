import React from "react";
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

const Home = ({ navigation }) => {
  return (
    <View >
      <View>
        <Text >Welcome to Artear Quiz</Text>
      </View>
      <TouchableOpacity  onPress={() => navigation.navigate('Question')}>
        <Text >Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Quiz')}>
        <Text >Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

